//selecting all required elements
const filterItem=document.querySelector(".items");
const filterImg=document.querySelectorAll(".image");

 //once window loded
window.onload=()=>{     
     //when user clicks on filteritem div
    filterItem.onclick = (selectedItem)=>{ 
        if(selectedItem.target.classList.contains("item")){               //if user click element has item class
         filterItem.querySelector(".active").classList.remove("active");  //remove the active class which is in the first element
            selectedItem.target.classList.add("active");                   //add active class on the user  selected element
            let filterName = selectedItem.target.getAttribute("data-name"); // getting data-name value of the user selected item nd storing in a filterName variable
            filterImg.forEach((image)=>{
               let filterImages= image.getAttribute("data-name");           //geeting imagr data-namevalue
              // if user selected item data-name value is equal to image data-name value
              //or user selected item data-name value is equal to "all"
               if((filterImages==filterName)|| (filterName=="all")){
                   image.classList.add("show");
               }
               else{
                image.classList.add("hide");
                image.classList.remove("show");
               }
            });
        }
    }

    for(let index=0;index<filterImg.length; index++){
        filterImg[index].setAttribute("onclick", "preview(this)");// adding onclick attribute in all available image
    }

}


//selecting all frequired elements
const previewBox=document.querySelector(".preview"),
previewImg=previewBox.querySelector("img"),
categoryName=previewBox.querySelector(".details p"), //displaying category name
closeIcon=previewBox.querySelector(".icon");
shadow=document.querySelector(".shadow");

//full screen image function
function preview(element){
    document.querySelector("body").style.overflow="hidden"; //once user click on any image, remove scroll of the body
    let selectedPrevImg=element.querySelector("img").src; //getting user selected image source link store and store in a variable
    let selectedImgCategory=element.getAttribute("data-name"); //getting user clicked data-name value
    categoryName.textContent=selectedImgCategory; //passing the data-namevalue to category name variable
    previewImg.src=selectedPrevImg; // passing the user clicked image source in the preview image source
    previewBox.classList.add("show"); //show the preview box
    shadow.classList.add("show"); //show the light grey background
    closeIcon.onclick=()=>{ //if close cliks on the close icon of the preview
        previewBox.classList.remove("show");//hide the preview box
        shadow.classList.remove("show"); //hide the light grey background
        document.querySelector("body").style.overflow="scroll"; //show the scroll bar of the body
    }
}
// when user clicks outside the login form, close the login form
// Get the modal
var modal = document.getElementById('11');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}