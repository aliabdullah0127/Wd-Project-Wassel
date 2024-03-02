function calculate() {
    let pweight = document.getElementById('input1').value;
    console.log(pweight)
    let aweight = document.getElementById('h2').value;
    let iweight = document.getElementById('h3').value;
    let gweight = document.getElementById('h4').value;
    let paperweight = document.getElementById('h5').value;
    let finalpweight = pweight*50;
    let finalaweight= aweight*100;
    let finaliweight = iweight*100;
    let finalgweight = gweight*100;
    let finalpaperweight = paperweight*100;
    let output = finalpweight + finalaweight + finaliweight + finalgweight + finalpaperweight;
    
  
    document.getElementById('result').innerText = output
    console.log('ran')
    
    };
