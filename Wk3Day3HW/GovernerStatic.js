// There is only one Governor in the state,
// add static methods and properties you'd expect a Governor to have.
// log the properties and test the methods (don't instantiate)
 console.log("I am a Governer class")
 
 class Governer{

    //Static Properties
    static myName="Josh Shapiro"
    static Governernumber='48'
    static bDate='Jan-01-1982'
    //Static Methods
    static state(){
        console.log(" Pennyslvania.")
    }
    static Priorities()
    {
        console.log("“We need leaders who possess the public’s trust. Bill DeWeese does not,” Shapiro said.")
    }
    static Policies()
    {
        console.log("Shapiro also facilitated a settlement between Highmark and UPMC, two healthcare giants who had been in a dispute for years.")
    }

 }
 // log the properties and test the methods (don't instantiate)

 console.log(`The Governer ${Governer.myName}' born on ${Governer.bDate} was the ${Governer.Governernumber}th Governer of`) 
 Governer.state()
 Governer.Policies()
 Governer.Priorities()



