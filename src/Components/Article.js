import axios from 'axios';
import React, { useState } from 'react';

export default function Article({ article, update }) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const [isEdited, setEdit] = useState(false);





    const deleteArticle = () => {
        axios.delete('http://localhost:3003/articles/' + article.id)
            .then(() => {
                update()
            })
    }



    const changeEdit = () => {
        setEdit(!isEdited)
    }





    function ArticleCard() {
        return (
            <div className={"article"}>
                <div className={"articleHeader"}>
                    <h2>{article.author}</h2>
                    <p className='articlePostDate'>Posté le {new Date(article.date).toLocaleDateString("fr-FR", options)}</p>
                </div>
                <p>{article.content}</p>
                <div className={"button"}>
                    <button onClick={changeEdit}>Modifier</button>
                    <button onClick={deleteArticle}>Supprimer</button>
                </div>
            </div>
        )
    }

    function EditArticle() {

        const [message, setMessage] = useState(article.content);
        const [auteur, setAuteur] = useState(article.author);

        const auteurChange = (event) => {
            setAuteur(event.target.value)
        };

        const messageUpdate = (event) => {
            setMessage(event.target.value)
        };

        const modification = () => {
            axios.put('http://localhost:3003/articles/' + article.id, {
                author: auteur,
                date: new Date(),
                content: message
            })
                .then(() => {
                    changeEdit()
                    update()
                })
        }
        return (
            <div className={"article"}>
                <div className={"formEdit"}>
                    <div className={"articleFormEdit"}>
                        <input className={"articleInput"}
                            type={"text"}
                            id={"auteur"}
                            placeholder={"Nom"}
                            value={auteur}
                            onChange={auteurChange}
                            required
                        />
                        <textarea className={"articleText"}
                            type={"text"}
                            id={"message"}
                            placeholder={"Message"}
                            value={message}
                            onChange={messageUpdate}
                            rows={6}
                            required
                        ></textarea>
                        <div className={"button"}>
                            <button onClick={modification} disabled={!(message.length >= 100 && !!auteur)}>Confirmer</button>
                            <button onClick={changeEdit}>Annuler</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return isEdited ? <EditArticle /> : <ArticleCard />


};