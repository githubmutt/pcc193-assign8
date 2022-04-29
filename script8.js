
window.onload = init;

// The contact manager as a global variable
let abm;
/**
 * Function Name: init()
 * This method creates and intializes a new instance of AddressBookManager
 */
function init() {
  // create an instance of the contact manager
  abm = new AddressBookManager();

  abm.displayContactTable("contacts")


  //To modify form, get first form and first button
  //document.forms[0].addEventListener("submit",formSubmitted)
  //buttons = document.getElementsByTagName('button')[0].type="submit"

}

/**
 * Class Name: Contact
 * This class takes both name and email to instantiate itself
 */
class Contact {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
// ====================================================================
//            !!! DO NOT MODIFY ABOVE THIS LINE!!!
// ====================================================================
function debug(text){

  console.log( text )
 // document.getElementById("log").innerHTML += text + "<br>"
 // log.textContext += text

}
/** 
 * Function Name: formSubmitted()
 * This function takes both name and email from the HTML to create 
 * an instance of Contact object for storage in the AddressBookManager
 * referenced by the global variable, abm.
 * This function returns a boolean to avoid form submission via HTTP
*/
function formSubmitted( ) {
    // YOUR CODE HERE
   /*  this works with  in the calling HTML file
      <!-- <form action="#" onsubmit="formSubmitted();"> 
    
      POSTED at 

      https://githubmutt.github.io/pcc193-assign8/?#

      */

 


 //   console.log("event object <*************************************")
//   console.log( evt )
//   console.log( evt.preventDefault() )
//   console.log("event object <*************************************")

    let nameTag = document.getElementById("name")
    let emailTag = document.getElementById("email")

    // just a list of valid .com, .net et all addresses 
    const pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[com|net|org|tv|gov|us|be]$/
    console.log("REGEXP: " + pattern.test(emailTag.value)  )    

    // console.log("REGEXP: " + pattern.test( emailTag.value) )    
    // incorrect email, so don't save
    if( !pattern.test(emailTag.value)){

//      return true
      return false
      
    }


    debug("formSubmitted:" + nameTag.value + " - " + emailTag.value)

    // add Contact
    abm.add( new Contact(nameTag.value , emailTag.value)  )

    // display Contacts
    abm.displayContactTable("contacts")    

    // Clear out form
    nameTag.value = ""
    emailTag.value = ""
  
    // RETURN false to prevent refresh
//    return true
    return false


  }
/** 
 * Function Name: emptyList()
 * This function empties the contact list in AddressBookManager 
 * and displays the "No contacts to display" message in the table area. 
*/
function emptyList() {
    // YOUR CODE HERE

    // sets length to 0 which empties the array
    abm.empty()

    // display again
    abm.displayContactTable("contracts")

  }


/** 
 * Class Name: AddressBookManager
 * This class initializes an empty contact list. This class has
 * THREE (3) methods:
 *    1. empty(): empty contact list.
 *    2. add(contact): add a named contact to list.
 *    3. displayContactTable(htmlId): displays the contact list in a 
 *       table format; if there is no contact in the list, print
 *       "No contacts to display!" in HTML.
*/
class AddressBookManager {
  constructor() {
    this.listOfContacts = [];
  }

  /** 
   * Method Name: empty()
   * This method empties the contact list.
  */
  empty() {
    // YOUR CODE HERE
    this.listOfContacts.length = 0
    debug("listofContacts.length = " + this.listOfContacts.length )

  }
  /** 
   * Method Name: add(contact)
   * This method adds the named contact to the contact list.
  */
  add(contact) {
    // YOUR CODE HERE

    debug("CONTACT:" + contact.name + " " + contact.email)
    abm.listOfContacts.push( contact )

    let row = "<tr><td>" + contact.name + "N</td<td>" + contact.email + "</td></tr>"
    debug("ROW:" + row)
    debug("length" + abm.listOfContacts.length)
 
     for(let v of abm.listOfContacts)
          debug( v.name + " " + v.email )


  }



  /** 
   * Method Name: displayContactTable(htmlId)
   * This method clears the prior table content and displays 
   * the new table content from the non-empty contact list in 
   * a correctly formatted HTML table. If the contact list is 
   * empty, this method prints a "No contacts to display!" 
   * message in HTML as depicted in the demo.
  */
  displayContactTable(htmlId) {
    // YOUR CODE HERE

    var header = "<table>  <thead>  <tr> <td>Name</td> <td>Email</td> </thead> <br>"
    var rows=""
    var contacts =  document.getElementById("contacts")   
    var arow = (name,email )  => ( "<tr><td>" + name + "</td><td>" +  email)
    
    if( abm.listOfContacts.length == 0){
        contacts.innerHTML = "No contacts"
    }else{
          for(let e in abm.listOfContacts){
                  rows +=  arow( abm.listOfContacts[e].name, abm.listOfContacts[e].email )
           }
          
           contacts.innerHTML = header + rows + "</table>"

          } // if else

  } // end of displayContactTable

}

