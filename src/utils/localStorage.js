
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
      
      if (ExistingFavorites) {
        const updatedFavorites = ExistingFavorites.numbers.concat(number);    
      
        let filteredfavorites =  favorites.filter((item)=>item.id !== ExistingFavorites.id)
         
          filteredfavorites.push({ id: id, numbers: updatedFavorites });    
          localStorage.setItem('favorites', JSON.stringify(filteredfavorites));
          
      
      } else {
        favorites.push({ id: id, numbers: [number] });

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
     

      return favorites;
    } catch (error) {
      // Handle the error gracefully
      console.error('Error accessing localStorage:', error);
      return [];
    }
  };

  export const removeFromFavorites = (id, number) => {
    try {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        let existingFavoriteIndex = favorites.findIndex((item) => item.id === id);
        
        if (existingFavoriteIndex !== -1) {
            let existingFavorite = favorites[existingFavoriteIndex];
            const updatedNumbers = existingFavorite.numbers.filter((favorite) => favorite !== number);
            
            if (updatedNumbers.length === 0) {
                favorites.splice(existingFavoriteIndex, 1);
            } else {
                existingFavorite.numbers = updatedNumbers;
            }
        }

        console.log(`Remove ${id} ${number}`);
        console.log('Existing favorites:');
        
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
        // Handle the error gracefully
        console.error('Error accessing localStorage:', error);
    }
};