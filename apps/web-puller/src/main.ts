import { Kafka } from 'kafkajs';

async function main() {
  const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:29092'],
    // logLevel: logLevel.DEBUG,
  });

  // try {
  //   const producer = kafka.producer();

  //   console.log('Connecting a producer');
  //   await producer.connect();
  //   console.log('producer connected');

  //   await producer.send({
  //     topic: 'test-topic',
  //     messages: [{ value: 'Hello KafkaJS user!' }],
  //   });

  //   await producer.disconnect();
  // } catch (e) {
  //   console.log(e);
  // }

  try {
    const consumer = kafka.consumer({
      groupId: 'test-group-3',
      sessionTimeout: 9000,
    });

    await consumer.connect();
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

    // console.log('Subscribed');

    await consumer.run({
      eachMessage: async (data) => {
        // const { topic, partition, message } = data;
        const { message } = data;

        console.log('consuming message');

        console.log({
          value: message.value.toString(),
        });
      },
    });
  } catch (e) {
    console.log('Error', e);
  }
}

main();
