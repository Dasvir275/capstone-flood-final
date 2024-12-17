import React, { useState } from 'react';

const Searchapi = () => {
    const [input, setInput] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [messages, setMessages] = useState([]);

    // Search API Function
    const handleSearch = async () => {
        if (searchInput.trim() === '') return;

        try {
            const response = await fetch(
                https://nominatim.openstreetmap.org/search?format=json&q=${searchInput}
            );
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error("Search API Error:", error);
            alert('Error fetching location data.');
        }
    };

    // Chatbot Message Handler
    const sendMessage = async () => {
        if (input.trim() === '') return;

        const userMessage = { role: 'user', content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);

        try {
            const response = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: updatedMessages }),
            });
            const data = await response.json();
            const botMessage = { role: 'assistant', content: data.message };
            setMessages([...updatedMessages, botMessage]);
            setInput('');
        } catch (error) {
            console.error("Error:", error);
            alert('Error communicating with the bot.');
        }
    };

    return (
        <div style={{ position: 'relative', height: '100vh', backgroundColor: '#f9f9f9' }}>
            {/* Search Bar at Top Center */}
            <div style={{
                position: 'fixed',
                top: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                zIndex: 10000, // High z-index to always appear at the front
                backgroundColor: '#ffffff',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                width: '400px',
                border: '1px solid #ddd',
            }}>
                <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search for a location..."
                    style={{
                        flex: 1,
                        padding: '8px 10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        fontSize: '14px',
                        outline: 'none',
                    }}
                />
                <button onClick={handleSearch} style={{
                    padding: '8px 12px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    outline: 'none',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                }}>
                    Search
                </button>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 && (
                <div style={{
                    position: 'fixed',
                    top: '70px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '10px',
                    width: '400px',
                    maxHeight: '200px',
                    overflowY: 'auto',
                    zIndex: 9999,
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                }}>
                    <h4 style={{ margin: 0 }}>Search Results:</h4>
                    <ul style={{ listStyle: 'none', padding: '5px 0', margin: 0 }}>
                        {searchResults.map((result, index) => (
                            <li key={index} style={{
                                padding: '5px 0',
                                borderBottom: '1px solid #f0f0f0',
                            }}>
                                {result.display_name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Chatbot UI */}
            <div style={{
                position: 'fixed',
                bottom: '10px',
                left: '10px',
                width: '320px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: 'white',
                padding: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}>
                <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '10px' }}>
                    {messages.map((msg, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <strong>{msg.role === 'user' ? 'You' : 'Bot'}:</strong> {msg.content}
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        style={{ flex: 1, padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
                    />
                    <button onClick={sendMessage} style={{
                        padding: '5px 10px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                    }}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Searchapi;