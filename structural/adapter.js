// The Adapter allows two objects with incompatible interfaces to interact with each other.

// Let's say, for example, that your application consults an API that returns XML and sends that information to another API to process that information.
// But the processing API expects JSON. You can't send the information as it's received since both interfaces are incompatible. You need to adapt it first.

class OldCalc {
    operations(t1, t2, operation) {
      switch (operation) {
        case 'add': return t1 + t2
        case 'sub': return t1 - t2
        default: return NaN
      }
    }
  }
  
  class NewCalc {
    add(t1, t2) {
      return t1 + t2
    }
  
    sub(t1, t2) {
      return t1 - t2
    }
  }
  
  class CalcAdapter {
    constructor() {
      this.calc = new NewCalc()
    }
  
    operations(t1, t2, operation) {
      switch (operation) {
        case 'add': return this.calc.add(t1, t2)
        case 'sub': return this.calc.sub(t1, t2)
        default: return NaN
      }
    }
  }
  
  const oldCalc = new OldCalc()
  console.log(oldCalc.operations(10, 5, 'add'))
  
  const newCalc = new NewCalc()
  console.log(newCalc.add(10, 5))
  
  const adapter = new CalcAdapter()
  console.log(adapter.operations(25, 10, 'sub'))