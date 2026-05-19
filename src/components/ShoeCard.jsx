const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }

  return (
    <div
      className={`border-2 rounded-2xl ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer`}
      onClick={handleClick}
    >
      <div className="bg-white rounded-2xl shadow-lg p-4 w-28 h-28 max-sm:w-20 max-sm:h-20 flex items-center justify-center">
        <img
          src={imgURL.thumbnail}
          alt="produto"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  )
}

export default ShoeCard