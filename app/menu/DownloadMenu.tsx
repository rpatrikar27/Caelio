'use client';

import React, { useState } from 'react';
import { Download, FileText, Loader2 } from 'lucide-react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { menuCategories } from './data';

export const DownloadMenu = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      
      // Title
      doc.setFontSize(24);
      doc.setTextColor(45, 34, 29); // #2D221D
      doc.text('CAELIO', pageWidth / 2, 20, { align: 'center' });
      
      doc.setFontSize(14);
      doc.setTextColor(201, 168, 76); // #C9A84C
      doc.text('THE GRAND MENU', pageWidth / 2, 30, { align: 'center' });
      
      doc.setFontSize(10);
      doc.setTextColor(97, 81, 75); // #61514B
      doc.text("Nagpur's Specialty Sanctuary", pageWidth / 2, 38, { align: 'center' });
      
      let currentY = 50;

      menuCategories.forEach((category) => {
        if (category.items.length === 0) return;

        // Check for page overflow
        if (currentY > 250) {
          doc.addPage();
          currentY = 20;
        }

        doc.setFontSize(14);
        doc.setTextColor(45, 34, 29);
        doc.text(category.name.replace(/[☕🥤🍵🧋🍹🫖🥐🍳🥪🍔🍟🍝🍕🍰➕]/g, '').trim(), 14, currentY);
        
        currentY += 5;
        
        const tableData = category.items.map(item => [
          item.name,
          item.desc,
          item.price,
          item.type.toUpperCase()
        ]);

        autoTable(doc, {
          startY: currentY,
          head: [['Item', 'Description', 'Price', 'Type']],
          body: tableData,
          theme: 'striped',
          headStyles: { fillColor: [201, 168, 76], textColor: [255, 255, 255] },
          styles: { fontSize: 9, font: 'helvetica' },
          columnStyles: {
            0: { cellWidth: 40, fontStyle: 'bold' },
            1: { cellWidth: 'auto' },
            2: { cellWidth: 20, halign: 'right' },
            3: { cellWidth: 20, halign: 'center' }
          },
          margin: { top: 20 },
          didDrawPage: (data: any) => {
            currentY = data.cursor.y + 15;
          }
        });

        currentY = (doc as any).lastAutoTable.finalY + 15;
      });

      // Footer with current date
      const date = new Date().toLocaleDateString();
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text(`Generated on ${date} | Caelio Nagpur`, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });

      doc.save('Caelio_Grand_Menu.pdf');
    } catch (error) {
      console.error('PDF Generation Error:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[9px] uppercase tracking-wider font-bold border transition-all cursor-pointer bg-brand-gold/10 text-brand-gold border-brand-gold/30 hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold disabled:opacity-50 disabled:cursor-not-allowed group whitespace-nowrap"
      title="Download Full Menu PDF"
    >
      {isGenerating ? (
        <Loader2 size={12} className="animate-spin" />
      ) : (
        <Download size={12} className="group-hover:translate-y-0.5 transition-transform" />
      )}
      <span>{isGenerating ? 'Generating...' : 'Download Menu'}</span>
    </button>
  );
};
