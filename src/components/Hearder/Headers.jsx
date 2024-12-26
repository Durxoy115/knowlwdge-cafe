import profile from '../../assets/Images/profile.png'

const Headers = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className='text-4xl font-bold'> Cloud No 9 - Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Headers;