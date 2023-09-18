
    export const checkFavorite=(id, number) => {
        try {
          const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
          return favorites.some((favorite) => favorite.id === id && favorite.number === number);
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
      favorites.push({ id: id, number: number });
      localStorage.setItem('favorites', JSON.stringify(favorites));
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
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const updatedFavorites = favorites.filter(
        (favorite) => !(favorite.id === id && favorite.number === number)
      );
      console.log(`remove ${id} ${number}`);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      // Handle the error gracefully
      console.error('Error accessing localStorage:', error);
    }
  };