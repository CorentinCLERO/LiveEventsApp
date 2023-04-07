import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Text } from 'react-native';

const WordpressFetch = ({ posts }) => {
    const [receivedPosts, setReceivedPosts] = useState(false);

    useEffect(() => {
        if (Array.isArray(posts) && typeof posts[0]?.id === 'number') {
            setReceivedPosts(true);
        }
    }, [posts]);

    return (
        <>
            {!receivedPosts && <ActivityIndicator size="large" color="#000000" style={styles.loader} />}
            {receivedPosts && Array.isArray(posts) && (
                <>
                    {posts.map((post) => (
                        <React.Fragment key={post.id}>
                            <Text style={styles.text}>{post.id}</Text>
                            <Text style={styles.text}>{post.title.rendered}</Text>
                            <Text style={styles.text}>{post.content.rendered}</Text>
                        </React.Fragment>
                    ))}
                </>
            )}
        </>
    );
};


export default WordpressFetch;

const styles = StyleSheet.create({
    text: {
        fontSize: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
