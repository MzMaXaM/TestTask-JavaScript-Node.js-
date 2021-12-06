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
To run the small pString(1,000 lines) add argument: -sTest<br>
To run the medium pString(10,000 lines) add argument: -mTest<br>
To run the big pString(153,040 lines) add argument: -bTest<br>
To run the error pString(6 lines, missing field) add argument: -eTest<br>
To run it on your own file add argument: -myTest and  the full name of the file<br>
For example: "node Parser -myTest example.csv"<br>
Make sure that your file is in the same folder.