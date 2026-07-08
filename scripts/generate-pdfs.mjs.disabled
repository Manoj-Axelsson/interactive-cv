import { spawn } from 'child_process';
import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function main() {
  console.log('Building production site...');
  const buildProcess = spawn('npm', ['run', 'build'], { cwd: projectRoot, shell: true });
  await new Promise((resolve, reject) => {
    buildProcess.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Build failed with code ${code}`));
    });
  });

  console.log('Starting preview server...');
  const serverProcess = spawn('npm', ['run', 'preview', '--', '--port', '4173'], { cwd: projectRoot, shell: true });
  
  // Wait for the server to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  let browser;
  try {
    console.log('Launching headless browser...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Generate Swedish CV
    console.log('Generating Swedish CV PDF...');
    await page.goto('http://localhost:4173/?lang=sv', { waitUntil: 'networkidle0' });
    await page.pdf({
      path: path.join(projectRoot, 'public/documents/Manoj_John_Axelsson_CV.pdf'),
      format: 'A4',
      printBackground: true,
      margin: { top: '0.4in', right: '0.4in', bottom: '0.4in', left: '0.4in' }
    });

    // Generate English CV
    console.log('Generating English CV PDF...');
    await page.goto('http://localhost:4173/?lang=en', { waitUntil: 'networkidle0' });
    await page.pdf({
      path: path.join(projectRoot, 'public/documents/Manoj_John_Axelsson_CV_EN.pdf'),
      format: 'A4',
      printBackground: true,
      margin: { top: '0.4in', right: '0.4in', bottom: '0.4in', left: '0.4in' }
    });

    console.log('PDFs generated successfully!');
  } catch (error) {
    console.error('Error during PDF generation:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
    console.log('Stopping preview server...');
    serverProcess.kill('SIGTERM');
    // Ensure the process is fully terminated in both Linux/Windows environments
    try {
      process.kill(-serverProcess.pid);
    } catch (e) {
      serverProcess.kill('SIGKILL');
    }
  }
}

main();
