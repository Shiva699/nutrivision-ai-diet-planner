import jsPDF from 'jspdf';

/**
 * Generate and download a professional diet plan PDF
 * @param {Object} mealPlan - The AI-generated meal plan
 * @param {Object} userPreferences - User's diet preferences
 */
export function downloadDietPlanPDF(mealPlan, userPreferences) {
  const doc = new jsPDF();
  
  // Colors matching your design
  const primaryColor = [41, 216, 255]; // #29d8ff
  const tertiaryColor = [78, 222, 163]; // #4edea3
  const darkColor = [13, 22, 59];
  const lightColor = [212, 228, 250];
  
  let yPosition = 20;
  const pageWidth = doc.internal.pageSize.width;
  const margin = 20;
  const contentWidth = pageWidth - (2 * margin);

  // Helper function to add text with word wrap
  const addWrappedText = (text, x, y, maxWidth, lineHeight = 7) => {
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * lineHeight;
  };

  // ===== HEADER =====
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('NutriVision', margin, 25);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('AI-Powered Personalized Diet Plan', margin, 33);

  yPosition = 55;

  // ===== USER DETAILS SECTION =====
  doc.setTextColor(...darkColor);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Your Personalized Plan', margin, yPosition);
  
  yPosition += 10;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  
  const date = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  doc.text(`Generated: ${date}`, margin, yPosition);
  
  yPosition += 8;
  doc.text(`Goal: ${userPreferences.goal.replace('-', ' ').toUpperCase()}`, margin, yPosition);
  doc.text(`Diet Type: ${userPreferences.dietType.toUpperCase()}`, pageWidth / 2, yPosition);
  
  yPosition += 6;
  doc.text(`Daily Calories: ${userPreferences.calories} kcal`, margin, yPosition);
  if (userPreferences.restrictions) {
    doc.text(`Restrictions: ${userPreferences.restrictions}`, pageWidth / 2, yPosition);
  }

  yPosition += 15;

  // ===== MACROS SECTION =====
  if (mealPlan.macros) {
    doc.setFillColor(240, 248, 255);
    doc.roundedRect(margin, yPosition, contentWidth, 25, 3, 3, 'F');
    
    yPosition += 8;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text('Macro Distribution', margin + 5, yPosition);
    
    yPosition += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    const macroX = margin + 15;
    doc.setTextColor(...primaryColor);
    doc.text(`Protein: ${mealPlan.macros.protein}`, macroX, yPosition);
    
    doc.setTextColor(...tertiaryColor);
    doc.text(`Carbs: ${mealPlan.macros.carbs}`, macroX + 60, yPosition);
    
    doc.setTextColor(197, 192, 255); // secondary color
    doc.text(`Fats: ${mealPlan.macros.fats}`, macroX + 120, yPosition);
    
    yPosition += 20;
  }

  // ===== MEALS SECTION =====
  const meals = [
    { data: mealPlan.breakfast, title: 'BREAKFAST', icon: '☀', color: primaryColor },
    { data: mealPlan.lunch, title: 'LUNCH', icon: '🍽', color: tertiaryColor },
    { data: mealPlan.dinner, title: 'DINNER', icon: '🌙', color: [197, 192, 255] }
  ];

  meals.forEach((meal, index) => {
    if (!meal.data) return;

    // Check if we need a new page
    if (yPosition > 240) {
      doc.addPage();
      yPosition = 20;
    }

    // Meal header with colored background
    doc.setFillColor(...meal.color);
    doc.rect(margin, yPosition, contentWidth, 8, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`${meal.icon} ${meal.title} - ${meal.data.time}`, margin + 3, yPosition + 5.5);
    
    yPosition += 12;

    // Meal content box
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    const boxStartY = yPosition;
    
    // Meal name
    doc.setTextColor(...darkColor);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(meal.data.name, margin + 3, yPosition);
    
    yPosition += 7;

    // Calories
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`${meal.data.calories} kcal`, margin + 3, yPosition);
    
    yPosition += 6;

    // Description
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    const descHeight = addWrappedText(meal.data.description, margin + 3, yPosition, contentWidth - 6, 5);
    yPosition += descHeight + 3;

    // Ingredients
    if (meal.data.ingredients && meal.data.ingredients.length > 0) {
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...darkColor);
      doc.text('Ingredients:', margin + 3, yPosition);
      
      yPosition += 5;
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 100, 100);
      
      const ingredients = meal.data.ingredients.join(' • ');
      const ingHeight = addWrappedText(ingredients, margin + 3, yPosition, contentWidth - 6, 4);
      yPosition += ingHeight + 3;
    }

    // Draw box around meal
    const boxHeight = yPosition - boxStartY;
    doc.roundedRect(margin, boxStartY - 2, contentWidth, boxHeight + 2, 2, 2, 'S');
    
    yPosition += 8;
  });

  // ===== SNACKS SECTION =====
  if (mealPlan.snacks) {
    if (yPosition > 240) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFillColor(...primaryColor);
    doc.rect(margin, yPosition, contentWidth, 8, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(`🍪 SNACKS`, margin + 3, yPosition + 5.5);
    
    yPosition += 12;

    doc.setDrawColor(200, 200, 200);
    const snackBoxStart = yPosition;
    
    doc.setTextColor(...darkColor);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(mealPlan.snacks.name, margin + 3, yPosition);
    
    yPosition += 7;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`${mealPlan.snacks.calories} kcal`, margin + 3, yPosition);
    
    yPosition += 6;

    doc.setTextColor(80, 80, 80);
    const snackDescHeight = addWrappedText(mealPlan.snacks.description, margin + 3, yPosition, contentWidth - 6, 5);
    yPosition += snackDescHeight + 3;

    const snackBoxHeight = yPosition - snackBoxStart;
    doc.roundedRect(margin, snackBoxStart - 2, contentWidth, snackBoxHeight + 2, 2, 2, 'S');
    
    yPosition += 8;
  }

  // ===== AI TIPS SECTION =====
  if (mealPlan.tips) {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFillColor(255, 250, 230);
    doc.roundedRect(margin, yPosition, contentWidth, 25, 3, 3, 'F');
    
    yPosition += 8;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...darkColor);
    doc.text('💡 AI Nutrition Tip', margin + 3, yPosition);
    
    yPosition += 7;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(80, 80, 80);
    addWrappedText(`"${mealPlan.tips}"`, margin + 3, yPosition, contentWidth - 6, 5);
    
    yPosition += 15;
  }

  // ===== FOOTER =====
  const footerY = doc.internal.pageSize.height - 15;
  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(0.5);
  doc.line(margin, footerY, pageWidth - margin, footerY);
  
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text('NutriVision - AI-Powered Diet Planning', margin, footerY + 5);
  doc.text(`© ${new Date().getFullYear()} All Rights Reserved`, pageWidth - margin - 40, footerY + 5);

  // ===== DOWNLOAD =====
  const filename = `NutriVision-Diet-Plan-${date.replace(/\s/g, '-')}.pdf`;
  doc.save(filename);
}

/**
 * Calculate total daily calories from meal plan
 * @param {Object} mealPlan - The meal plan object
 * @returns {number} - Total calories
 */
export function calculateTotalCalories(mealPlan) {
  let total = 0;
  
  if (mealPlan.breakfast?.calories) {
    total += parseInt(mealPlan.breakfast.calories);
  }
  if (mealPlan.lunch?.calories) {
    total += parseInt(mealPlan.lunch.calories);
  }
  if (mealPlan.dinner?.calories) {
    total += parseInt(mealPlan.dinner.calories);
  }
  if (mealPlan.snacks?.calories) {
    total += parseInt(mealPlan.snacks.calories);
  }
  
  return total;
}
