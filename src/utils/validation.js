export function emailvalidation(email)
{
    //eslint-disable-next-line
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return regex.text(email)
}
//email format validation

export function PasswordValidation(password)
{
    //eslint-disable-next-line
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return regex.test(password)
}
//password format(contain UpperCase more then 1, lowerCase more then 1, number more then 1, specialCharacter more then 1)
export function namevalidation(name)
{
    var regex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/
    return regex.text(name) 
}
//name format(contain Korean 2~4 or contain English 2~10)

