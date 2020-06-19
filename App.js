// User Constructor
class User {
    constructor(name, age, country,provincia) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.provincia=provincia;
    }
}

// UI Constructor
class UI {
    addUser(user) {
        const userList = document.getElementById('user-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>User name</strong>: ${user.name} -
                <strong>Age</strong>: ${user.age} - 
                <strong>Country</strong>: ${user.country}-
                <strong>Provincia</strong>: ${user.provincia}                
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
    `;
    userList.appendChild(element);
    }
    resetForm() {
        document.getElementById('user-form').reset();
    }

    deleteUser(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Succsssfully', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div,app);
        // Remove the Message after 3 seconds
         setTimeout(function () {
         document.querySelector('.alert').remove();
       }, 3000);
  }
}

// DOM Events
document.getElementById('user-form')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('name').value,
            age = document.getElementById('age').value,
            country = document.getElementById('country').value,
            provincia= document.getElementById('provincia').value;

            // Create a new Oject User
            const user = new User(name, age, country , provincia);

            // Create a new UI
            const ui = new UI();

             // Input User Validation
            if (name === '' || age === '' || country === ''|| provincia === '') {
              return ui.showMessage('Please Insert data in all fields', 'danger');
            }

            ui.addUser(user);
            ui.showMessage('User Added Successfully', 'success');
            ui.resetForm();
            e.preventDefault();
    });
document.getElementById('user-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteUser(e.target);
        e.preventDefault();
    });