function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
   
    sections.forEach(section => {
        
        section.style.display = 'none';
    });
    // Show the selected section
   const id= document.getElementById(sectionId);
   id .style.display = 'block';
}

// Show the home section by default
showSection('home');
const btnHome=document.querySelectorAll('#btn');
function btn(){
        console.log(btnHome);
    btnHome.textContent='Added to cart'; 
}
btnHome.addEventListener('click',btn());