import React from 'react';
import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: 10,
    margin: 20,
  },
  leftColumn: {
    width: '50%',
    padding: 10,
  },
  rightColumn: {
    width: '50%',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 'auto',
    margin: 20
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

const PDFGenerator = () => {
  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Text style={{ fontSize: '40px', fontWeight: '800' }}>Value Proportion Canvas</Text>
        </View>
      </Page>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <Text style={{ fontSize: '20px', textAlign: 'center' }}>Value Map</Text>
        <View style={styles.leftColumn}>
          <Image src="/valueMap.png" style={styles.image} />
        </View>
        <View style={styles.leftColumn}>
          <Image src="/customerProfile.png" style={styles.image} />
        </View>
        {/* <View style={styles.rightColumn}>
          <Text style={styles.heading}>Pains</Text>
        </View> */}
      </Page>
    </Document>
  );
};

export default PDFGenerator;
