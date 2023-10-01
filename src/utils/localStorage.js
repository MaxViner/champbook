
    export const checkFavorite=(id, number) => {
        try {
          const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
          return favorites.some((favorite) => favorite.id === id &&
           favorite.numbers.some((CitateNumber)=>CitateNumber  === number ));
        } catch (error) {
          // Handle the error gracefully
          console.error('Error accessing localStorage:', error);
          return false;
        }
  }

  export const addToFavorites = (id, number) => {
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if (!id || !number) {
        return
      }  
      const ExistingFavorites = favorites.find((fav) => fav.id === id);
      // console.log('ExistingFavorites');
      // console.log(ExistingFavorites);

      if (ExistingFavorites) {
        const updatedFavorites = ExistingFavorites.numbers.concat(number);    
        // console.log('updatedFavorites');
        // console.log(updatedFavorites);
        // console.log('favorites-no-filter');
        // console.log(favorites);
        let filteredfavorites =  favorites.filter((item)=>item.id !== ExistingFavorites.id)
          // console.log('favorites-filter');
          // console.log(filteredfavorites);
          filteredfavorites.push({ id: id, numbers: updatedFavorites });    
          localStorage.setItem('favorites', JSON.stringify(filteredfavorites));
           console.log('favorites');
           console.log(filteredfavorites);
       
      } else {
        favorites.push({ id: id, numbers: [number] });
        console.log('Favorites');
        console.log(favorites);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    } catch (error) {
      // Handle the error gracefully
      console.error('Error accessing localStorage:', error);
    }
  };
  
  export const getFavorites = () => {
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      console.log('favorites');
      console.log(favorites);

      return favorites;
    } catch (error) {
      // Handle the error gracefully
      console.error('Error accessing localStorage:', error);
      return [];
    }
  };

  export const removeFromFavorites = (id, number) => {
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      let ExistingFavorites = favorites.find((item) => item.id === id) || {};
      const updatedFavorites = ExistingFavorites.numbers.filter((favorite) => favorite !== number);
      console.log(`remove ${id} ${number}`);
      ExistingFavorites.numbers = updatedFavorites;
      console.log('ExistingFavorites');
      console.log(favorites);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      // Handle the error gracefully
      console.error('Error accessing localStorage:', error);
    }
  };