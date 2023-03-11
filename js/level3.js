const sendName = () =>{
    const name = getElementInputValue('name-field');
    saveToLocalStorage("Name", name);
}
const deleteName = () =>{
    document.getElementById('name-field').value = "";
    removeFromLocalStorage("Name")
}
const sendEmail = () =>{
    const email = getElementInputValue('email-field');
    saveToLocalStorage("Email", email);
}
const deleteEmail = () =>{
    document.getElementById('email-field').value = "";
    removeFromLocalStorage("Email")
}
const sendMessage = () =>{
    const message = getElementInputValue('message-field');
    saveToLocalStorage("Message", message);
}
const deleteMessage = () =>{
    document.getElementById('message-field').value = "";
    removeFromLocalStorage("Message")
}

const sendUser = () =>{
    let user = {};
    const name = getElementInputValue('name-field');
    const email = getElementInputValue('email-field');
    const message = getElementInputValue('message-field');
    user["Name"] = name;
    user["Email"] = email;
    user["Message"] = message;
    const userStringified = JSON.stringify(user);
    saveToLocalStorage("User", userStringified);
}

const saveToLocalStorage = (key, value) =>{
    localStorage.setItem(key, `${value}`)
}

const removeFromLocalStorage = (key) =>{
    localStorage.removeItem(`${key}`)
}

const resetLocalStorage = () =>{
    localStorage.clear();
}

const getElementInputValue = (id) =>{
    const element = document.getElementById(id);
    const value = element.value;
    return value;
}