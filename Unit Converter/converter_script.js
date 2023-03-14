const foot = document.getElementById('feet');
const inch = document.getElementById('inch');
const meter = document.getElementById('meter');
const centimeter = document.getElementById('centimeter');
const kilometer = document.getElementById('kilometer');
const mile = document.getElementById('mile');

foot.addEventListener('input', function(){
  let f = this.value ;
  let i = f*12 ;
  if(!Number.isInteger(i)){
    i = i.toFixed(4);
  }
  inch.value = i ;

  let c = f*30.48 ;
  if(!Number.isInteger(c)){
    c = c.toFixed(4);
  }
  centimeter.value = c ;

  let m = f*0.3048 ;
  if(!Number.isInteger(m)){
      m = m.toFixed(4);
    }
  meter.value = m ;

  let k = f/3280.839895
  if(!Number.isInteger(k)){
    k = k.toFixed(4);
  }
  kilometer.value = k ;

  let mi = f/5280
  if(!Number.isInteger(mi)){
    mi = mi.toFixed(4);
  }
  mile.value = mi ;
})

inch.addEventListener('input', function(){
  let i = this.value ;
  let f = i/12 ;
  if(!Number.isInteger(f)){
      f = f.toFixed(4);
    }
  foot.value = f ;

  let c = i*2.54 ;
  if(!Number.isInteger(c)){
    c = c.toFixed(4);
  }
  centimeter.value = c ;

  let m = i/39.37 ;
  if(!Number.isInteger(m)){
      m = m.toFixed(4);
    }
  meter.value = m ;

  let k = i/39370.07874
  if(!Number.isInteger(k)){
    k = k.toFixed(4);
  }
  kilometer.value = k ;

  let mi = i/63360
  if(!Number.isInteger(mi)){
    mi = mi.toFixed(4);
  }
  mile.value = mi ;
})

// meter & centimeter
meter.addEventListener('input', function(){
  let m = this.value ;
  let c = m*100 ;
  if(!Number.isInteger(c)){
    c = c.toFixed(4);
  }
  centimeter.value = c ;

  let f = m*3.28083 ;
  if(!Number.isInteger(f)){
    f = f.toFixed(4);
    }
  foot.value = f ;
  
  let i = m*39.37007874 ;
  if(!Number.isInteger(i)){
    i = i.toFixed(4);
  }
  inch.value = i ;

  let k = m/1000
  if(!Number.isInteger(k)){
    k = k.toFixed(4);
  }
  kilometer.value = k ;

  let mi = m/1609.344
  if(!Number.isInteger(mi)){
    mi = mi.toFixed(4);
  }
  mile.value = mi ;
})

centimeter.addEventListener('input', function(){
  let c = this.value ;

  let f = c*0.03280839 ;
  if(!Number.isInteger(f)){
      f = f.toFixed(4);
    }
  foot.value = f ;

  let i = c*0.3937007874 ;
  if(!Number.isInteger(i)){
    i = i.toFixed(4);
  }
  inch.value = i ;

  let m = c/100 ;
  if(!Number.isInteger(m)){
      m = m.toFixed(4);
    }
  meter.value = m ;

  let k = c/100000
  if(!Number.isInteger(k)){
    k = k.toFixed(4);
  }
  kilometer.value = k ;

  let mi = c/160934.4
  if(!Number.isInteger(mi)){
    mi = mi.toFixed(4);
  }
  mile.value = mi ;
})

//kilometer & mile
kilometer.addEventListener('input', function(){
  let k = this.value ;

  let f = k*3280.839895 ;
  if(!Number.isInteger(f)){
      f = f.toFixed(4);
    }
  foot.value = f ;

  let i = k*39370.07874 ;
  if(!Number.isInteger(i)){
    i = i.toFixed(4);
  }
  inch.value = i ;

  let c = k*100000 ;
  if(!Number.isInteger(c)){
    c = c.toFixed(4);
  }
  centimeter.value = c ;

  let m = k*1000 ;
  if(!Number.isInteger(m)){
      m = m.toFixed(4);
    }
  meter.value = m ;

  let mi = k*0.6213711922
  if(!Number.isInteger(mi)){
    mi = mi.toFixed(4);
  }
  mile.value = mi ;

})

mile.addEventListener('input', function(){
  let mi = this.value ;

  let f = mi*5280 ;
  if(!Number.isInteger(f)){
      f = f.toFixed(4);
    }
  foot.value = f ;

  let i = mi*63360 ;
  if(!Number.isInteger(i)){
    i = i.toFixed(4);
  }
  inch.value = i ;

  let c = mi*160934.4 ;
  if(!Number.isInteger(c)){
    c = c.toFixed(4);
  }
  centimeter.value = c ;

  let m = mi*1609.344 ;
  if(!Number.isInteger(m)){
      m = m.toFixed(4);
    }
  meter.value = m ;

  let k = mi*1.609344
  if(!Number.isInteger(k)){
    k = k.toFixed(4);
  }
  kilometer.value = k ;

})




