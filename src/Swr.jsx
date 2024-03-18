import useSWR from 'swr';

// Import useSWR from swr package

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const {
    data: images,
    error,
    isValidating,
  } = useSWR('https://chatanalysis.site', fetcher);
  console.log(images)
  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div>
      {images &&
        images.map((bird, index) => (
          <img key={index} src={bird} alt='bird' width={500} />
        ))}
    </div>
  );
};

export default Swr;