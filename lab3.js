  let arrayOfObjects = [];
  let index = 0;
  let object = {};

  
function OpenResult() {
         let recode = [];
            for (let j = 0; j < index; j++) {
                recode[j] = 
				arrayOfObjects[j].name + " " +
                arrayOfObjects[j].radioSex + " " +
                arrayOfObjects[j].email + " " +
                arrayOfObjects[j].date + " " +
                arrayOfObjects[j].chekbox + " " +
				arrayOfObjects[j].type + " " +
                arrayOfObjects[j].comment;
            }
            recode = recode.join(";");
            window.open('lab3_2.html?&' + recode);
        }
       

  function mainPage() {
            window.close();
        }     

    function Button() {
			let flagRadio=0;
            let sex = document.getElementsByName('sex');
            let sexValue = " ";
            for (let i = 0; i < sex.length; i++) {
                if (sex[i].checked) {
                    sexValue = sex[i].value;
					flagRadio=1;  //заполнено ли поле
                }
            }


            let adviceCheck = document.getElementsByName("check1");
            let checkBoxValue;

            if (adviceCheck[0].checked) {
                checkBoxValue = "да";
            } else {
                checkBoxValue = "нет";
            }
			
			
			if(validateName(document.getElementById("name").value)==false)
				 alert('Введите корректное имя. Пример: Иванов Иван');
			else if(validateEmail(document.getElementById("email").value)==false)
				 alert('Введите корректный e-mail. Пример: IvanovIvan@mail.ru');
             else if(flagRadio == 0) 
			 alert("Поле 'Пол' не заполнено");
		 else if(document.getElementById("select").value == "") 
			 alert("Поле 'Когда вы посещаете ресторан' не заполнено");
		  else if(document.getElementById("textarea").value == "") 
			 alert("Поле 'Что вы хотели бы улучшить в ресторане' не заполнено");
		 else if(document.getElementById("weekList").value == "") 
			 alert("Поле 'Неделя' не заполнено");
		 
		 
			 else
			 {

               object =
                    {
                        name: document.getElementById("name").value,
                        radioSex: sexValue,
						email: document.getElementById("email").value,
                        date: document.getElementById("weekList").value,
						chekbox: checkBoxValue,
						type: document.getElementById("select").value,
                        comment: document.getElementById("textarea").value                        
                    };


                arrayOfObjects[index] = object;
                index++;

                alert("Данные добавлены");
            }
        }
		
		
	function validateEmail(email) {
   var reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  if(reg.test(email) == false)   
      return false;
  else return true;
}

function validateName(name){
 var reg = /^[A-Za-zА-я]+$/;
 if(reg.test(name) == false)   
      return false;
  else return true;
}