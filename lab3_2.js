 function Print() {
            let score = decodeURIComponent(location.search.substr(1)).split('&');
            score.splice(0, 1);
            score = score.toString();
            let mass = [];
            mass = score.split(';');

            for (let j = 0; j < mass.length; j++) {
                mass[j] = mass[j].split(" ");
            }

            let objects = [];
            for (let i = 0; i < mass.length; i++) {               
              
                    objects [i] = {
                        name: mass[i][0],
                        radioSex: mass[i][1],
                        email: mass[i][2],
                        date: mass[i][3],
                        chekbox: mass[i][4],
                        type: mass[i][5],
						comment: mass[i][6]						
                    }                
            }

           for (let i = 0; i < objects.length; i++) {
                let str = objects[i].date;
                str=str.replace("W"," ");
                objects[i].date = str;
            }


            var tbody = document.getElementById('tbody');
            for (let i = 0; i < objects.length; i++) {
                let tr = "<tr>";
                let td="<td>";
                let trClose="</tr>";
                let tdClose="</td>";

                tr += td + objects[i].name + tdClose + /*+*/
                        td + objects[i].radioSex + tdClose+ /*+*/
                        td + objects[i].email + tdClose+ 
                        td + objects[i].date + tdClose+
						td + objects[i].chekbox + tdClose+ /*+*/
                        td + objects[i].type + tdClose+
                        td + objects[i].comment + tdClose+
                    trClose;
                tbody.innerHTML += tr;
            }
			
			var select = document.getElementById('select');
            for (let i = 0; i < objects.length; i++) {
			let option = "<option>";
            let optionClose = "</option>";
                option+=objects[i].name + optionClose;
                select.innerHTML += option;
            }     			
        }

        function openForm() {
            window.close();
        }