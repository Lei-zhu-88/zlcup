module.exports = function main() 
{
    //console.log("Debug Info");

    var input = [
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00      
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000000',
                Name: 'Coca-Cola',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000001',
                Name: 'Sprite',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000001',
                Name: 'Sprite',
                Unit: 'bottle',
                Price: 3.00
            },
            {
                Barcode: 'ITEM000004',
                Name: 'battery',
                Unit: 'a',
                Price: 2.00
            }
        ];



        let quantityObject = {};
        
        let unitObject = {};
        let priceObject = {};
        let totalPrice = {};
 
        for(let i =0; i < input.length; i++)
        { 
         
 
            if (quantityObject[input[i].Name])
            {
                quantityObject[input[i].Name] += 1;
                
                totalPrice[input[i].Name]+= priceObject[input[i].Name];                
            } 
            else 
            {
                quantityObject[input[i].Name] = 1;  
                unitObject[input[i].Name] = input[i].Unit;
                priceObject[input[i].Name] = input[i].Price;  
                totalPrice[input[i].Name] = priceObject[input[i].Name];

            }
        }


      //  console.log(quantityObject);
       
       // console.log(unitObject);
      
        //console.log(priceObject);

      



    let output = '***<store earning no money>Receipt *** \n';
    var total=0; 
    for (let goods in quantityObject)
    {
        if (quantityObject[goods]>=2)
        {
           
            unitObject[goods] += 's';

        }
        total += totalPrice[goods];
        
        output += 
                        'Name: '+ goods + ', Quantity: '+ quantityObject[goods]
                        + ' '+ unitObject[goods]+ ', Unit price: ' + priceObject[goods].toFixed(2) + ' (yuan),'
                        +' Subtotal: ' + totalPrice[goods].toFixed(2) + ' (yuan) \n';          
           
                        //console.log(output);
           //console.log('----------------------------------');

        
    }
    output +=   '-----------------------\n' + 'Total: ' + total.toFixed(2)+' (yuan)'

    //printReceipt(quantityObject);

console.log(output);
return output;
   
}  


    