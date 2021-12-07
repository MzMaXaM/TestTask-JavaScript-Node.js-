# Supplier Product List Processor
displays the products from the csv<br>
You'll need Node.js installed on your system<br>
in command line type "node Parser" with the atribute to run the app<br>
an txt file will be generated with the name: "Parsed_File.txt"<br>

## Example
"brand_name","model_name","condition_name","gb_spec_name","colour_name","network_name"<br>
"ACCESSORIZE","UNIVERSAL 10 INCH TABLET FOLIO CASE - BIRDS BLACK","Brand New","Not Applicable","Multicolour","Not Applicable"<br>
"ACCESSORIZE","UNIVERSAL 10 INCH TABLET FOLIO CASE - BIRDS BLACK","Brand New","Not Applicable","Multicolour","Not Applicable"<br>
"ACCESSORIZE","UNIVERSAL 10 INCH TABLET FOLIO CASE - BIRDS BLACK","Brand New","Not Applicable","Multicolour","Not Applicable"<br>

### would represent as
=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=<br>
brand_name:ACCESSORIZE<br>
model_name:UNIVERSAL 10 INCH TABLET FOLIO CASE - BIRDS BLACK<br>
condition_name:Brand New<br>
gb_spec_name:Not Applicable<br>
colour_name:Multicolour<br>
network_name:Not Applicable<br>
quantity: 3<br>
=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=<br>

## How to...
Run the Parser with argument: your_file_name.csv<br>
Optionally* you can add a name for output file<br>
For example: "node Parser example.csv exampleOutput.txt"<br>
Make sure that your file is in the same folder with the Parser.
