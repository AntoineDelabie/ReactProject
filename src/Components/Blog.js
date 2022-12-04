import axios from "axios";
import { useEffect, useState } from "react";
import Article from "./Article"


export default function Blog() {

    const [articles, setArticles] = useState([]);
    const [auteur, setAuteur] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        loadData()
    }, []);

    const loadData = () => {
        axios.get("http://localhost:3003/articles")
            .then((response) => {
                setArticles(response.data)
            });
    }


    const publishMessage = (event) => {
        axios.post('http://localhost:3003/articles', {
            author: auteur,
            date: new Date(),
            content: message
        })
            .then(function (response) {
                console.log(response);
                loadData();
                setAuteur('')
                setMessage('')
            })
    };

    const authorUpdate = (event) => {
        setAuteur(event.target.value)
    };

    const messageUpdate = (event) => {
        setMessage(event.target.value)
    };
    return (
        <div>
            <h1>Blog</h1>
            <div className={"form"}>
                <h2>Poster un nouveau message</h2>
                <div className={"articleForm"}>
                    <input className={"articleInput"}
                        type={"text"}
                        id={"auteur"}
                        placeholder={"Nom"}
                        value={auteur}
                        onChange={authorUpdate}
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

                    <button className={"publishButton"} onClick={publishMessage} disabled={!(message.length >= 100 && !!auteur)}>Envoyer</button>
                </div>
            </div>
            <div className={"articlesList"}>
                {articles.map((article) => (
                    <Article key={article.id} article={article} update={loadData} />
                ))}
            </div>
        </div>);
};