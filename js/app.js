


const fetchDataLoad = async (searchText = '13', isShowAll) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)


    const data = await res.json();

    const allPhoneData = data.data;



    displayPhone(allPhoneData, isShowAll);


}



const displayPhone = (phones, isShowAll) => {
    const cartContainer = document.getElementById("cart-container");

    // clear container old item  before adding search new item 

    cartContainer.innerHTML = '';


    // display showAll button when item phone greater then 12 else  hidden

    const showAllBtn = document.getElementById('showAall-container');

    if (phones.length > 12 && !isShowAll) {
        showAllBtn.classList.remove('hidden');

    } else {
        showAllBtn.classList.add('hidden');

    }

    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones = phones;
    // console.log(isShowAll)

    // display only 12 items phone



    // all date here display
    phones.forEach(phoneData => {

        // console.log(phoneData)

        const phoneCard = document.createElement('div');
        // console.log(phoneCard)
        phoneCard.setAttribute('class', 'card card-compact bg-base-100 shadow-xl');
        phoneCard.innerHTML = `
    
    
     
    <figure><img src="${phoneData.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phoneData.phone_name}</h2>
      <p>There are many variations of passages of available, but the majority have suffered</p>
      <div class="card-actions justify-center">
        <button onclick="showDetails('${phoneData.slug}')" class="btn btn-primary">Show Details</button>
      </div>
    </div>
    
    
    `


        cartContainer.appendChild(phoneCard);

    })



    // hidden spinner after loading data 

    loadingSpinner(false)


}


const searchBtn = (isShowAll) => {


    loadingSpinner(true)

    const inputField = document.getElementById('inputField');
    const inputText = inputField.value;




    fetchDataLoad(inputText, isShowAll);

    // inputField.value =""; ekane valu clear kote gele  problem error asbe bajan


}



const loadingSpinner = (isLoading) => {

    const loadingSpinner = document.getElementById('showLoadingSpinner');


    if (isLoading) {

        loadingSpinner.classList.remove('hidden');
    } else {

        loadingSpinner.classList.add('hidden');

    }


}




const showAllBtn = () => {

    searchBtn(true);



}









const showDetails = async (id) => {


    const modelLoading =document.getElementById('mode_loading');

    modelLoading.classList.remove('hidden');

    console.log("show details", id)

    const detailData = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)

    const details = await detailData.json();

    const allDetails = details.data



    showDetailsData(allDetails);

}

fetchDataLoad()



const showDetailsData = (dataDetails) => {
    const modelBox = document.getElementById('main-model-box');

    console.log(dataDetails)

    modelBox.innerHTML = `
  
  <div class='w-full  bg-[#0D6EFD0D] flex items-center justify-center p-5'>
  <img src='${dataDetails.image}' class='' >
  </div>
  <h3 class="font-bold text-3xl">${dataDetails.name}</h3>
  <p class="py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
  <h3 class=" text-base "> <strong>Storage:</strong> ${dataDetails.mainFeatures.storage
        }</h3>
  <h3 class=" text-base "> <strong>Display Size:</strong> ${dataDetails.mainFeatures.displaySize

        }</h3>
  <h3 class=" text-base "> <strong>Chipset:</strong> ${dataDetails.mainFeatures.chipSet


        }</h3>
  <h3 class=" text-base "> <strong>memory:</strong> ${dataDetails.mainFeatures.memory


        }</h3>
  <h3 class=" text-base "> <strong>slug:</strong> ${dataDetails.slug


        }</h3>
  <h3 class=" text-base "> <strong>releaseDate
  :</strong> ${dataDetails?.releaseDate || 'unCompleted'



        }</h3
  <h3 class=" text-base "> <strong>brand
  :</strong> ${dataDetails?.brand}</h3>

  <h3 class=" text-base "> <strong>GPS

  :</strong> ${dataDetails?.others?.GPS || 'No Available G.P.S'
  }</h3>

  <div class="modal-action">
    <!-- if there is a button in form, it will close the modal -->
    <button class="btn bg-red-600 text-white">Close</button>
  </div>
  
  `


  const modelLoading =document.getElementById('mode_loading');

  modelLoading.classList.add('hidden');
    handleShow.showModal();


}





const isLoad=()=>{


  
}