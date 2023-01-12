import React from 'react'
import axios from 'axios';
import Card from '../components/Card';
import CardSkeleton from '../components/CardSkeleton';
import EmptyState from '../components/EmptyState';

function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://63a57933318b23efa794782b.mockapi.io/orders');
                setOrders(data.map((obj) => obj.items).flat());
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при просмотре предыдущих заказов');
                console.error(error);
            }
        })();
    }, [])

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
            </div>

            {
                isLoading &&
                    <div className="cards">
                        {[...Array(8)].map((item, index) => (
                            <CardSkeleton key={index} />
                        ))}
                    </div>
            }

            { 
                orders.length > 0 && 
                    <div className="cards">
                        {orders.map((obj, index) => (
                            <Card
                                key={index}
                                card={obj}
                            />
                        ))}
                    </div>
            }

            {
                (!isLoading && !orders.length) &&
                    <EmptyState 
                        img={`./img/sad-emodzi.png`}
                        title={`Заказов нет`}
                        subtitle={`Оформите хотя бы один заказ`}
                    />
            }
        </div>
    );
}

export default Orders;