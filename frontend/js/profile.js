document.getElementById('editButton').addEventListener('click', function() {
    document.querySelector('.profile-container').style.display = 'none';
    document.querySelector('.edit-container').style.display = 'block';
});

document.getElementById('saveButton').addEventListener('click', function() {
    const name = document.getElementById('editName').value;
    const surname = document.getElementById('editSurname').value;
    const phone = document.getElementById('editPhone').value;
    const since = document.getElementById('editSince').value;
    const reviews = document.getElementById('editReviews').value;
    const photo = document.getElementById('editPhoto').files[0];

    // Обновление информации профиля
    document.getElementById('userName').innerText = name;
    document.getElementById('userSurname').innerText = surname;
    document.getElementById('userPhone').innerText = phone;
    document.getElementById('userSince').innerText = since;
    document.getElementById('userReviews').innerText = reviews;

    // Обновление фото профиля
    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePhoto').src = e.target.result;
        }
        reader.readAsDataURL(photo);
    }

    document.querySelector('.edit-container').style.display = 'none';
    document.querySelector('.profile-container').style.display = 'block';
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.querySelector('.edit-container').style.display = 'none';
    document.querySelector('.profile-container').style.display = 'block';
});