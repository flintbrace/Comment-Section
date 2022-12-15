const showContainers = document.querySelectorAll(".reply")

const container = document.querySelector(".container")
const commentBtn = document.getElementById("get");
const inputC = document.getElementById("inputC");
/*  */
const reply = document.querySelectorAll(".addreply");
const replyBtn = document.querySelectorAll(".send");
const inputR = document.querySelectorAll(".inputR");

/* // */

window.addEventListener("load", () => {
    commentsLS = JSON.parse(localStorage.getItem('comment')) || [];
    repliesLS = JSON.parse(localStorage.getItem('reply')) || [];
    repliesLS2 = JSON.parse(localStorage.getItem('reply2')) || [];
    console.log(typeof commentsLS)


    commentBtn.addEventListener('click', () => {
        if (inputC.value === "") {
            inputC.setAttribute("placeholder", "Type a comment")
        } else {
            dataC = {
                commentC: inputC.value,
                time: new Date().toLocaleString()
            }
            commentsLS.push(dataC)
            localStorage.setItem('comment', JSON.stringify(commentsLS))
            inputC.value = ""
            location.reload()
        }

    })



    createComment()


})

function remv(m) {

    console.log(commentsLS[m])
}



function createComment() {



    commentsLS.forEach(c => {

        const commentContainer = document.createElement("div");
        commentContainer.classList.add("comment-container", "open");
        commentContainer.id = "newComment"
        /*  */

        const commentCard = document.createElement("div");
        commentCard.classList.add("comment-card");

        const header = document.createElement("div");
        header.classList.add("header");

        const h1 = document.createElement("h1");
        h1.classList.add("h1");
        h1.textContent = "New Comment";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "Delete";

        const comment = document.createElement("p");
        comment.classList.add("para");
        comment.textContent = `${c.commentC}`;

        const time = document.createElement("div");
        time.classList.add("time");

        const time2 = document.createElement("p");
        time2.classList.add("time-time");
        time2.textContent = `${c.time}`;

        const addreply = document.createElement("p");
        addreply.classList.add("addreply");
        addreply.textContent = `Reply`;

        const replyy = document.createElement("div");
        replyy.classList.add("replyy");

        const inputR = document.createElement("input");
        inputR.classList.add("inputR");
        inputR.type = "text";
        inputR.setAttribute("autofocus", "")

        const send = document.createElement("button");
        send.classList.add("send");
        send.textContent = `Send`;

        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");

        const likes = document.createElement("p");
        likes.classList.add("likes");
        likes.textContent = `Likes`;

        const dislikes = document.createElement("p");
        dislikes.classList.add("dislikes");
        dislikes.textContent = `Dislikes`;

        const reply = document.createElement("p");
        reply.classList.add("reply");
        reply.textContent = `Reply`;

        commentContainer.append(commentCard);
        commentCard.append(header, comment, time, replyy, cardFooter);
        header.append(h1, deleteBtn);
        time.append(time2, addreply);
        replyy.append(inputR, send);
        cardFooter.append(likes, dislikes, reply);
        container.append(commentContainer);


        reply.addEventListener("click", () => {
            const them = commentContainer.children;
            const them2 = Array.from(them)
            them2.forEach(h => h.classList.toggle("show"))
        })

        addreply.addEventListener("click", () => {
            replyy.classList.toggle("flex");
            commentCard.classList.toggle("blue")
        });

        addreply.addEventListener('mouseover', () => {
            commentCard.classList.add("blue3")
        })
        addreply.addEventListener('mouseout', () => {
            commentCard.classList.remove("blue3")
        })



        send.addEventListener('click', () => {
            if (inputR.value === "") {
                inputR.setAttribute("placeholder", "Type a Reply")
            } else {
                dataR = {
                    replyR: inputR.value,
                    time: new Date().toLocaleString()
                }
                repliesLS.push(dataR)
                localStorage.setItem('reply', JSON.stringify(repliesLS))
                inputR.value = ""
                location.reload()
            }
        })
        createReply(commentContainer)
        deleteBtn.addEventListener('click', () => {

            commentsLS = commentsLS.filter(f => f != c)
            localStorage.setItem('comment', JSON.stringify(commentsLS))
            setTimeout(() => { location.reload() }, 1000)

        })
        deleteBtn.addEventListener('mouseover', () => {
            commentCard.classList.add("blur")
        })
        deleteBtn.addEventListener('mouseout', () => {
            commentCard.classList.remove("blur")
        })
    })






    /* const parentcontainer = btn.closest(".comment-container")
    const _id = parentcontainer.id;

    const num = parentcontainer.querySelectorAll(`[dataset=${_id}]`).length;
    btn.textContent = ` Replies ${num}`

    btn.addEventListener("click", () => {

        if (_id) {
            let childrenContainer = parentcontainer.querySelectorAll(`[dataset=${_id}]`)
            childrenContainer.forEach(c => c.classList.toggle("open"))
        }
    }) */






}




function createReply(theR) {

    repliesLS.forEach(r => {
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("comment-container");
        commentContainer.id = "newComment"
        /*  */

        const commentCard = document.createElement("div");
        commentCard.classList.add("comment-card");

        const header = document.createElement("div");
        header.classList.add("header");

        const h1 = document.createElement("h1");
        h1.classList.add("h1");
        h1.textContent = "New Reply";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "Delete";

        const comment = document.createElement("p");
        comment.classList.add("para");
        comment.textContent = `${r.replyR}`;

        const time = document.createElement("div");
        time.classList.add("time");

        const time2 = document.createElement("p");
        time2.classList.add("time-time");
        time2.textContent = `${r.time}`;

        const addreply = document.createElement("p");
        addreply.classList.add("addreply");
        addreply.textContent = `Reply`;

        const replyy = document.createElement("div");
        replyy.classList.add("replyy");

        const inputR = document.createElement("input");
        inputR.classList.add("inputR");
        inputR.type = "text";
        inputR.setAttribute("autofocus", "")

        const send = document.createElement("button");
        send.classList.add("send");
        send.textContent = `Send`;

        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");

        const likes = document.createElement("p");
        likes.classList.add("likes");
        likes.textContent = `Likes`;

        const dislikes = document.createElement("p");
        dislikes.classList.add("dislikes");
        dislikes.textContent = `Dislikes`;

        const reply = document.createElement("p");
        reply.classList.add("reply");
        reply.textContent = `Reply`;

        commentContainer.append(commentCard);
        commentCard.append(header, comment, time, replyy, cardFooter);
        header.append(h1, deleteBtn);
        time.append(time2, addreply);
        replyy.append(inputR, send);
        cardFooter.append(likes, dislikes, reply);
        theR.append(commentContainer);


        reply.addEventListener("click", () => {
            const them = commentContainer.children;
            const them2 = Array.from(them)
            them2.forEach(h => h.classList.toggle("show"))
        })

        addreply.addEventListener("click", () => {
            replyy.classList.toggle("flex");
            commentCard.classList.toggle("blue")
        });

        addreply.addEventListener('mouseover', () => {
            commentCard.classList.add("blue3")
        })
        addreply.addEventListener('mouseout', () => {
            commentCard.classList.remove("blue3")
        })




        send.addEventListener("click", () => {
            send.addEventListener('click', () => {
                if (inputR.value === "") {
                    inputR.setAttribute("placeholder", "Type a Reply")
                } else {
                    dataR2 = {
                        replyR2: inputR.value,
                        time: new Date().toLocaleString()
                    }
                    repliesLS2.push(dataR2)
                    localStorage.setItem('reply2', JSON.stringify(repliesLS2))
                    inputR.value = ""
                    location.reload()
                }
            })
        })
        createReply2(commentContainer)
        deleteBtn.addEventListener('click', () => {
            commentCard.classList.add("blur")
            repliesLS = repliesLS.filter(a => a != r)
            localStorage.setItem('reply', JSON.stringify(repliesLS))
            setTimeout(() => { location.reload() }, 1000)

        })
        deleteBtn.addEventListener('mouseover', () => {
            commentCard.classList.add("blur")
        })
        deleteBtn.addEventListener('mouseout', () => {
            commentCard.classList.remove("blur")
        })
    })



}


function createReply2(theNR) {
    repliesLS2.forEach(v => {
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("comment-container");
        commentContainer.id = "newComment"
        /*  */

        const commentCard = document.createElement("div");
        commentCard.classList.add("comment-card");

        const header = document.createElement("div");
        header.classList.add("header");

        const h1 = document.createElement("h1");
        h1.classList.add("h1");
        h1.textContent = "New Reply";

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "Delete";

        const comment1 = document.createElement("p");
        comment1.classList.add("para");
        comment1.style.color = 'crimson'
        comment1.innerHTML = ` <br> I think You've nested enough`;

        const comment = document.createElement("p");
        comment.classList.add("para");
        comment.innerHTML = `${v.replyR2}`;

        const time = document.createElement("div");
        time.classList.add("time");

        const time2 = document.createElement("p");
        time2.classList.add("time-time");
        time2.textContent = `${v.time}`;

        const addreply = document.createElement("p");
        addreply.classList.add("addreply");
        addreply.textContent = `Reply`;

        const replyy = document.createElement("div");
        replyy.classList.add("replyy");

        const inputR = document.createElement("input");
        inputR.classList.add("inputR");
        inputR.type = "text";
        inputR.setAttribute("autofocus", "")

        const send = document.createElement("button");
        send.classList.add("send");
        send.textContent = `Send`;

        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");

        const likes = document.createElement("p");
        likes.classList.add("likes");
        likes.textContent = `Likes`;

        const dislikes = document.createElement("p");
        dislikes.classList.add("dislikes");
        dislikes.textContent = `Dislikes`;

        const reply = document.createElement("p");
        reply.classList.add("reply");
        reply.textContent = `Reply`;

        commentContainer.append(commentCard);
        commentCard.append(header, comment1, comment, time, replyy, cardFooter);
        header.append(h1, deleteBtn);
        time.append(time2, addreply);
        replyy.append(inputR, send);
        cardFooter.append(likes, dislikes, reply);
        theNR.append(commentContainer);

        reply.addEventListener("click", () => {
            comment1.classList.toggle("alert");
        })


        addreply.addEventListener("click", () => {
            replyy.classList.toggle("flex")
            commentCard.classList.toggle("blue")
        });

        addreply.addEventListener('mouseover', () => {
            commentCard.classList.add("blue3")
        })
        addreply.addEventListener('mouseout', () => {
            commentCard.classList.remove("blue3")
        })


        send.addEventListener("click", () => {
            send.addEventListener('click', () => {
                if (inputR.value === "") {
                    inputR.setAttribute("placeholder", "Type a Reply")
                } else {
                    dataR2 = {
                        replyR2: inputR.value,
                        time: new Date().toLocaleString()
                    }
                    repliesLS2.push(dataR2)
                    localStorage.setItem('reply2', JSON.stringify(repliesLS2))
                    inputR.value = ""
                    location.reload()
                    inputR.style.color == 'crimson'
                }
            })
        })
        //createReply3()
        deleteBtn.addEventListener('click', () => {
            commentCard.classList.add("blur")
            repliesLS2 = repliesLS2.filter(b => b != v)
            localStorage.setItem('reply2', JSON.stringify(repliesLS2))
            setTimeout(() => { location.reload() }, 1000);
        })
        deleteBtn.addEventListener('mouseover', () => {
            commentCard.classList.add("blur")
        })
        deleteBtn.addEventListener('mouseout', () => {
            commentCard.classList.remove("blur")
        })
    })

}






































/* 






















































reply.forEach(r => r.addEventListener("click", () => {
    const imp = r.nextElementSibling;
    imp.classList.toggle("flex")
}))


replyBtn.forEach(b => b.addEventListener("click", () => {
    const newReply = document.createElement("div")
    newReply.classList.add("comment-container", "open");
    newReply.id = "second-reply"
    inputRvalue = b.previousElementSibling.value;
    const stringToInj = `
    <div class="comment-card">
    <h1 class="h1">New Reply</h1>
    <p> ${inputRvalue} </p>
    <p class="addreply">Reply</p>
    <div class="replyy">
        <input type="text" class="inputR">
        <button class="send">Send</button>
    </div>
    <div class="card-footer">
        <p class="likes">Likes</p>
        <p class="dislikes">Dislikes</p>
        <p class="reply">Replies 0</p>
    </div>
</div>`
    if (inputRvalue === "") {
        b.previousElementSibling.setAttribute("placeholder", "Type a reply")
    } else {
        newReply.innerHTML = stringToInj;
        const perr = b.closest(".comment-container");
        newReply.setAttribute(`dataset`, `${perr.id}`)
        perr.append(newReply);

    }
    b.previousElementSibling.value = ""





}))


commentBtn.addEventListener("click", () => {



    const newComment = document.createElement("div")
    newComment.classList.add("comment-container", "open");
    newComment.id = "second-comment"
    inputCvalue = inputC.value;
    const stringToInj = `
        <div class="comment-card">
        <h1 class="h1">New Commet</h1>
        <p> ${inputCvalue} </p>
        <p class="addreply">Reply</p>
        <div class="replyy">
            <input type="text" class="inputR">
            <button class="send">Send</button>
        </div>
        <div class="card-footer">
            <p class="likes">Likes</p>
            <p class="dislikes">Dislikes</p>
            <p class="reply">Replies 0</p>
        </div>
    </div>`

    if (inputCvalue === "") {
        commentBtn.previousElementSibling.setAttribute("placeholder", "Type a reply")
    } else {
        newComment.innerHTML = stringToInj;
        container.append(newComment)
    }
    inputC.value = ""

})


showContainers.forEach(btn => {
    const parentcontainer = btn.closest(".comment-container")
    const _id = parentcontainer.id;

    const num = parentcontainer.querySelectorAll(`[dataset=${_id}]`).length;
    btn.textContent = ` Replies ${num}`

    btn.addEventListener("click", () => {

        parentcontainer.classList.toggle("blue1")

        if (_id) {
            let childrenContainer = parentcontainer.querySelectorAll(`[dataset=${_id}]`)
            childrenContainer.forEach(c => c.classList.toggle("open"))
        }
    })
}) */