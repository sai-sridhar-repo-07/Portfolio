const sections = document.querySelectorAll('.section');

const sectionBtns = document.querySelectorAll('.controls');

const secBtn = document.querySelectorAll('.control');

const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class

    for(let i = 0; i < secBtn.length; i++){

        secBtn[i].addEventListener('click', function() {

            let currentBtn = document.querySelectorAll('.active-btn');
            // console.log(currentBtn);
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';

        })

    }

    // Sections active class

    allSections.addEventListener('click', (e) =>  {
        
        const id = e.target.dataset.id;
        // console.log(e.target);
        // console.log(id);
        if(id){
           
            //remove selected from other buttons
            // console.log(sectionBtns[0]);
            const btns = sectionBtns[0].children;
            for(let btn of btns){
                btn.classList.remove('active');
            }

            // console.log(sectionBtns[0]);

            e.target.classList.add('active');


            //Hide other sections

            sections.forEach((section) =>{

                section.classList.remove('active');

            })

            const element = document.getElementById(id);
            // console.log(element);
            element.classList.add('active');



        }

    })

}

PageTransitions();



