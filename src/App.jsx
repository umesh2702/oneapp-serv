import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import Header from './components/Header/Header';
import Home from './routes/Home';
import ServiceDetails from './routes/ServiceDetails';
import Footer from './components/Footer';
import ServiceProvider from './context/ServiceContext';
import ServiceDetail from './components/PropertyDetails/ServiceDetail';
import BookingConfirmation from './BookingConfirmation';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

const App = () => {
    return (
        <ServiceProvider>
            <Container maxW='100%' px='6'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='service-details' element={<ServiceDetails />}>
                        <Route path=':serviceId' element={<ServiceDetail />} />
                    </Route>
                    <Route path='/confirm-booking/:serviceId' element={<BookingConfirmation />} />
                    <Route
                        path='*'
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                     <Route path="/login" element={<Login />} />
                     <Route path="/signup" element={<Signup />} />
                </Routes>
            </Container>
            <Footer />
        </ServiceProvider>
    );
};

export default App;
