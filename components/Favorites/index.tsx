import { useState, useEffect } from "react";
import {PropsFavorites} from "../../pages/interfaces";

export default function Favorites({ productId }:PropsFavorites) {
    const [favorite, setFavorite] = useState<Boolean>(false);

    useEffect(() => {
        const favoritesLocal:Number[] = JSON.parse(localStorage.getItem("USER_FAVORITES"));
        if (favoritesLocal) {
            favoritesLocal.map(itemId => { itemId === productId ? setFavorite(true) : null });
        }
    }, [productId]);

    const addToFavoritesHandler = (pId:Number) => {
        const favoritesLocal:Number[] = JSON.parse(localStorage.getItem("USER_FAVORITES"));
        let newFavorite:Number[] = [];

        if (!favoritesLocal && !favorite) {
            newFavorite.push(pId);
            localStorage.setItem("USER_FAVORITES", JSON.stringify(newFavorite));
            return;
        }

        newFavorite = favoritesLocal.filter(itemId => itemId !== pId);
        if (newFavorite.length === favoritesLocal.length && !favorite) newFavorite.push(pId);

        localStorage.setItem("USER_FAVORITES", JSON.stringify(newFavorite));
        setFavorite(!favorite);
    };

    return (
        <div className="favorites" onClick={() => addToFavoritesHandler(productId)}>
            <i className={`${favorite ? "bi bi-heart-fill fs-2" : "bi bi-heart fs-2 primary"}`} style={{ color: "red" }}></i>
        </div >
    );
};