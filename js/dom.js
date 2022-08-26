document.getElementById('apply-bg').addEventListener('click', function() {
    const friends = document.getElementsByClassName('friend')
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';   
    }
})
document.getElementById('third-btn').addEventListener('click',function () {
    const thirdFriend =  document.getElementById('3rd-friend');
    thirdFriend.style.textAlign = 'center';
})
document.getElementById('add-new').addEventListener('click',function () {
    const addNew = document.getElementById('friends'); // কোথায় এলিমেন্ট যুক্ত করবো ?
    const friend = document.createElement('div'); // কি এলিমেন্ট যুক্ত করবো?
    friend.classList.add('friend'); // নতুন Friend এর জন্য style যুক্ত করা
    friend.innerHTML = `
    <h3 class = "friend-name"> Add new friend </h3>
    `
    addNew.appendChild(friend);
    
    

})