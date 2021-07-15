import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'nx-webcraler',
  brokers: ['localhost:29092'], // TBI: Environment variable?
});

export async function getKafkaProducer() {
  const producer = kafka.producer();

  try {
    console.log('Connecting a producer');
    await producer.connect();
    console.log('producer connected');
  } catch (e) {
    console.log(e); // TODO: Log system?
  }

  return producer;
}

export async function getKafkaConsumerByGroupId(consumerGroupId: string) {
  const consumer = kafka.consumer({
    groupId: consumerGroupId,
  });

  try {
    console.log('Connecting a consumer ' + consumerGroupId);
    await consumer.connect();
    console.log('consumer connected ' + consumerGroupId);
  } catch (e) {
    console.log(e); // TODO: Log system?
  }

  return consumer;
}
