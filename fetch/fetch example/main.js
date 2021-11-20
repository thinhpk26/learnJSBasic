var courseApi = 'http://localhost:3000/course'

function start() {
    getCourses(renderCourses);

    handleCreateForm();

}

start()







// GET
function getCourses(callBack) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callBack)
}

function renderCourses(courses) {
    var listCourses = document.querySelector('#list-courses')
    var htmls = courses.map(function(course) {
        return`
        <li class="course-item-${course.id}">
        <h3>${course.name}</h3>
        <p>${course.discription}</p>
        <button onclick="handleFixCourse(${course.id})">Fix</button>
        <button onclick="handleDeleteCourse(${course.id})">Clear</button>
        </li>
        `
    })
    listCourses.innerHTML = htmls.join('');
} 


// CREATE
function createCourse(data, callBack) {
    fetch(courseApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function(response) {
            return response.json();
        })
        .then(callBack)
}

function handleCreateForm() {
    var createForm = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            discription: description
        }
        createCourse(formData, function() {
            getCourses(renderCourses)
        });
        document.querySelector('input[name="name"]').value = '';
        document.querySelector('input[name="description"]').value= '';
    }
    var onkeypressName = document.querySelectorAll('input')[0];
    onkeypressName.onkeypress = function(e) {
        switch(e.which) {
            case 13: 
                createForm();
            break;
        }
    }
    var onkeypressDesription = document.querySelectorAll('input')[1];
    onkeypressDesription.onkeypress = function(e) {
        switch(e.which) {
            case 13: 
                createForm();
            break;
        }
    }
    var onclickBtn = document.querySelector('.create');
    onclickBtn.onclick = createForm;
}

// DELETE
function handleDeleteCourse(id) {
    fetch(courseApi + '/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function(response) {
            return response.json();
        })
        .then(function() {
            var deleteCourse = document.querySelector('.course-item-' + id)
            if(deleteCourse) {
                deleteCourse.remove()
            }
        })
}


// FIX
function handleFixCourse(id) {
    getCourseAndChange(id, function(data) {
        document.querySelector('input[name="name"]').value = data.name;
        document.querySelector('input[name="description"]').value = data.discription;
        var fixAndCancel = document.querySelector('.fix');
        fixAndCancel.classList.add('fixAndCancel')
        document.querySelector('.fixAndCancel').innerHTML = `
            <button class="fixBtn">Fix</button>
            <button class="cancelBtn">Cancel</button>
        `
        // Cancel
        var namer = data.name;
        var description = data.discription;
        document.querySelector('.cancelBtn').onclick = function(e) {
            console.log(data)
            fixCourse(id, data)
            fixAndCancel.classList.add('create-block')
            document.querySelector('.create-block').innerHTML = `
            <button class="create">Create</button>
        `
            handleCreateForm()
            document.querySelector('input[name="name"]').value = '';
            document.querySelector('input[name="description"]').value = '';
        }
        // Fix
        document.querySelector('input[name="name"]').oninput = function(e) {
            namer = e.target.value;
        }
        document.querySelector('input[name="description"]').oninput = function(e) {
            description = e.target.value;
        }
        document.querySelector('.fixBtn').onclick = function() {
            data = {
                name: namer,
                discription: description
            }
            console.log(data)
            fixCourse(id, data)
            fixAndCancel.classList.add('create-block')
            document.querySelector('.create-block').innerHTML = `
            <button class="create">Create</button>
        `
            handleCreateForm()
            document.querySelector('input[name="name"]').value = '';
            document.querySelector('input[name="description"]').value = '';
        }
    })
}

function getCourseAndChange(id, callBack) {
    fetch(courseApi + '/' + id)
        .then(function(response) {
            return response.json()
        })
        .then(callBack)
}

function fixCourse(id, data) {
    fetch(courseApi + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(function(response) {
            return response.json()
        })
        .then(function() {
            getCourses(renderCourses)
        })
}








