function gcd(a, b) {
    let n;
      for(let i=2; i<=a && i<=b; i++) {
        if(a%i==0 && b%i==0) {
          n=i;
        }
      }
      return n;
    }
    console.log(gcd(30, 15))