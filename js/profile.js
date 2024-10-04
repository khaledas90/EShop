document.addEventListener('DOMContentLoaded', () => {
    const firstName = document.getElementById('firstName');
    const surname = document.getElementById('surname');
    const mobileNumber = document.getElementById('mobileNumber');
    const addressLine1 = document.getElementById('addressLine1');
    const addressLine2 = document.getElementById('addressLine2');
    const postcode = document.getElementById('postcode');
    const state = document.getElementById('state');
    const area = document.getElementById('area');
    const emailId = document.getElementById('emailId');
    const education = document.getElementById('education');
    const country = document.getElementById('country');
    const stateRegion = document.getElementById('stateRegion');
    const saveProfileBtn = document.getElementById('saveProfileBtn');

    const alertUser = document.getElementById('alertUser');
    const fillProfileForm = (user) => {
        firstName.value = user.firstName || "";
        surname.value = user.surname || "";
        mobileNumber.value = user.mobileNumber || "";
        addressLine1.value = user.addressLine1 || "";
        addressLine2.value = user.addressLine2 || "";
        postcode.value = user.postcode || "";
        state.value = user.state || "";
        area.value = user.area || "";
        emailId.value = user.emailId || "";
        education.value = user.education || "";
        country.value = user.country || "";
        stateRegion.value = user.stateRegion || "";
    };

    const loadProfileData = () => {
        const profileData = JSON.parse(localStorage.getItem('profileData'));
        const user = JSON.parse(localStorage.getItem('user')) || [];

        if (profileData) {
            fillProfileForm(profileData);
        } else if (user.length > 0) {
            fillProfileForm({ firstName: user[0].name, emailId: user[0].email });
        }
    };

    const getProfileData = () => {
        if ([firstName, surname, mobileNumber, addressLine1, postcode, state, emailId, education, country, stateRegion].some(input => !input.value)) {
            Swal.fire({
                icon: "error",
                text: "Please fill all the fields!",
            });
            return;
        }

        const profileData = {
            firstName: firstName.value,
            surname: surname.value,
            mobileNumber: mobileNumber.value,
            addressLine1: addressLine1.value,
            addressLine2: addressLine2.value,
            postcode: postcode.value,
            state: state.value,
            area: area.value,
            emailId: emailId.value,
            education: education.value,
            country: country.value,
            stateRegion: stateRegion.value,
        };

        localStorage.setItem('profileData', JSON.stringify(profileData));
        Swal.fire({
            icon: "success",
            text: "Profile data saved successfully!",
            showConfirmButton: true,
            confirmButtonText: "Confirm",
        });
        alertUser.style.display = 'none';
    };

    saveProfileBtn.addEventListener('click', getProfileData);
    loadProfileData();
});


document.querySelector("#imageUpload").addEventListener("change", function() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("resent-image", reader.result)
    });

    reader.readAsDataURL(this.files[0]);
})

document.addEventListener("DOMContentLoaded", () => {
    const RecentDataUrl = localStorage.getItem("resent-image")

    if (RecentDataUrl) {
        document.querySelector("#imgProfile").setAttribute('src', RecentDataUrl)
    }
})