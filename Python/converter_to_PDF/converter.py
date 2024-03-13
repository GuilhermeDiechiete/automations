from reportlab.pdfgen import canvas
import os

def convert_text_files_to_pdf(input_folder, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    for filename in os.listdir(input_folder):
        input_filepath = os.path.join(input_folder, filename)
        
        if os.path.isfile(input_filepath) and filename.lower().endswith(('.txt', '.js', '.ts')):
            output_filepath = os.path.join(output_folder, f"{os.path.splitext(filename)[0]}.pdf")
            
            with open(output_filepath, 'wb') as pdf_file:
                pdf = canvas.Canvas(pdf_file)
                
                with open(input_filepath, 'r') as text_file:
                    content = text_file.read()
                    pdf.drawString(10, 800, f"Conteúdo do arquivo: {os.path.basename(input_filepath)}")
                    pdf.drawString(10, 780, content)
                    pdf.showPage()
                    pdf.save()

if __name__ == "__main__":
    input_folder = "./files"
    output_folder = "./files_PDF"

    convert_text_files_to_pdf(input_folder, output_folder)

