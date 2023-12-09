document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-button");
    const inputContainer = document.getElementById("input-container");
    const form = document.getElementById("dynamic-form");
    let counter = 6; // zacetna

    //  novo polje '+' 
    addButton.addEventListener("click", function() {
        const inputRow = document.createElement("div");
		inputRow.className = "input-row transparent-background"
        inputRow.innerHTML = `
            <label>${counter}:</label>
            <input type="text" name="input[]" placeholder="ime">
            <input type="text" name="input[]" placeholder="priimek">&nbsp&nbsp
            <button type="button" class="remove-button round-button">-</button>`;
        inputContainer.appendChild(inputRow);
        counter++; // povecanje
    });

    // izbris '-'
    inputContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-button")) {
            const inputRow = event.target.parentElement;
            inputContainer.removeChild(inputRow);
            counter--; // ce izbrises
        }
    });

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        for (const pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    });
});
	
        // Sweet alert
         const telInput = document.getElementById("tel");
    const mailInput = document.getElementById("mail");
    const telPattern = telInput.getAttribute("pattern");
    const mailPattern = mailInput.getAttribute("pattern");

     document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        const telValue = telInput.value;
        const mailValue = mailInput.value;

        if (telValue.match(new RegExp(telPattern)) && mailValue.match(new RegExp(mailPattern))) {
            Swal.fire({
                position: 'center-center',
                icon: 'success',
                title: 'Vpis je bil uspešen',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Prosim popravite vnos.',
                
            });
        }
    });
	});
		//vizitka ko kliknes  na '1'
		const label = document.querySelector('label[for="vizitka"]');
    const hiddenButton = document.getElementById('vizitka');

    label.addEventListener('click', function () {
        Swal.fire({
            position: 'center-center',
            icon: 'info',
            title: 'Anej Šuligoj, 4.Ra,<br>leto:2023/24,<br>mentor:Boštjan Vouk.',
            showConfirmButton: false,
            timer: 5500
        });
    });
	
	
      
      document.getElementById("info").addEventListener("click", function () {
		  event.preventDefault();
    Swal.fire({
        title: 'Ajdovski nogometni turnir:',
        html: '4. 6. 2023, Lokavec 135d, 5270 Ajdovščina,<br> prijavnina: 50€,<br>rok prijave je 1. 6. 2023<br>Informacije: 041 478 388<br>Email: lokavec@ks-ajdovscina.si<br>Organizator turnirja: Krajevna skupnost Lokavec.',
        icon: 'info',
        confirmButtonText: 'OK'	
    });
	//sweet alert barve
	Swal.getPopup().style.backgroundColor = 'rgb(215, 252, 215)';
    Swal.getTitle().style.color = 'rgb(2, 48, 32)';
    Swal.getContent().style.color = 'rgb(2, 48, 32)';
    Swal.getConfirmButton().style.backgroundColor = 'green';
    Swal.getConfirmButton().style.color = 'white';
});
    
	
	