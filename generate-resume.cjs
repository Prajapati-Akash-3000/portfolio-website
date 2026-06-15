const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/Akash_Prajapati_Resume.pdf'));

doc.fontSize(24).text('Akash Prajapati', { align: 'center' });
doc.moveDown();
doc.fontSize(12).fillColor('gray').text('Full Stack Developer & Aspiring Cybersecurity Professional', { align: 'center' });
doc.moveDown(2);

doc.fillColor('black');
doc.fontSize(16).text('Summary', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).text('Passionate developer with expertise in React, Django, and PostgreSQL. Focused on building scalable, secure web applications.');
doc.moveDown(1.5);

doc.fontSize(16).text('Skills', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).text('- Frontend: React 19, Vite, Tailwind CSS, MUI, Framer Motion\n- Backend: Django, DRF, SimpleJWT, Python\n- Database: PostgreSQL, MySQL\n- Integrations: Razorpay, Gmail SMTP\n- Infrastructure: Gunicorn, Whitenoise');
doc.moveDown(1.5);

doc.fontSize(16).text('Internship', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).text('Python & Django Intern (2 Months)');
doc.moveDown(1.5);

doc.fontSize(16).text('Projects', { underline: true });
doc.moveDown(0.5);
doc.fontSize(14).text('Utsavora');
doc.fontSize(12).text('A full-stack event management platform featuring Role-Based Access Control, JWT Authentication, Razorpay Payments, and Digital Invitation Generation.');
doc.moveDown(1.5);

doc.fontSize(16).text('Links', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).fillColor('blue').text('GitHub: https://github.com/Prajapati-Akash-3000');
doc.text('LinkedIn: https://www.linkedin.com/in/akash-prajapati-3a2a8039b/');

doc.end();
