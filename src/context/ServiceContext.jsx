import { createContext, useState, useEffect } from 'react';
import { servicesData } from '../data1'; // Assuming you have a services data file

export const ServiceContext = createContext('');

const ServiceProvider = ({ children }) => {
    const [services, setServices] = useState(servicesData);
    const [country, setCountry] = useState('Select Country');
    const [countries, setCountries] = useState([]);
    const [priceRange, setPriceRange] = useState('Select Price Range');
    const [serviceType, setServiceType] = useState('Select Service Type');
    const [serviceTypes, setServiceTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Extracting unique countries from services data
        const allCountries = services.map(service => service.country);
        const uniqueCountries = [...new Set(allCountries)];
        setCountries(uniqueCountries);
    }, [services]);

    useEffect(() => {
        // Extracting unique service types from services data
        const allServiceTypes = services.map(service => service.type);
        const uniqueServiceTypes = [...new Set(allServiceTypes)];
        setServiceTypes(uniqueServiceTypes);
    }, [services]);

    const searchHandler = () => {
        setIsLoading(true);

        // Function to check if the selection is default ('Select ...')
        const isDefault = str => {
            return str.includes('Select');
        };

        // Parsing the price range
        const [minPrice, maxPrice] = priceRange.split('-').map(str => parseInt(str.trim()));

        // Filtering services based on selected criteria
        const filteredServices = servicesData.filter(service => {
            const servicePrice = parseInt(service.price);

            // No filters selected
            if (isDefault(country) && isDefault(priceRange) && isDefault(serviceType)) {
                return true;
            }

            // Country is selected
            if (!isDefault(country) && isDefault(priceRange) && isDefault(serviceType)) {
                return service.country === country;
            }

            // Price range is selected
            if (isDefault(country) && !isDefault(priceRange) && isDefault(serviceType)) {
                return servicePrice >= minPrice && servicePrice <= maxPrice;
            }

            // Service type is selected
            if (isDefault(country) && isDefault(priceRange) && !isDefault(serviceType)) {
                return service.type === serviceType;
            }

            // Country and price range are selected
            if (!isDefault(country) && !isDefault(priceRange) && isDefault(serviceType)) {
                return service.country === country && servicePrice >= minPrice && servicePrice <= maxPrice;
            }

            // Country and service type are selected
            if (!isDefault(country) && isDefault(priceRange) && !isDefault(serviceType)) {
                return service.country === country && service.type === serviceType;
            }

            // Price range and service type are selected
            if (isDefault(country) && !isDefault(priceRange) && !isDefault(serviceType)) {
                return servicePrice >= minPrice && servicePrice <= maxPrice && service.type === serviceType;
            }

            // All filters are selected
            return (
                service.country === country &&
                servicePrice >= minPrice &&
                servicePrice <= maxPrice &&
                service.type === serviceType
            );
        });

        setTimeout(() => {
            setServices(filteredServices.length > 0 ? filteredServices : []);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <ServiceContext.Provider
            value={{
                services,
                country,
                setCountry,
                countries,
                priceRange,
                setPriceRange,
                serviceType,
                setServiceType,
                serviceTypes,
                searchHandler,
                isLoading,
            }}
        >
            {children}
        </ServiceContext.Provider>
    );
};

export default ServiceProvider;
