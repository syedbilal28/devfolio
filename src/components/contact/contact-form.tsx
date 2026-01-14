'use client';
import React, { useState } from 'react';
import { Button, Input, message } from 'antd';
import { MailOutlined, CloseOutlined } from '@ant-design/icons';
import './_contact-form.scss';

const { TextArea } = Input;

export const ContactForm: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            message.error('Please fill in all required fields');
            return;
        }

        setLoading(true);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                message.success('Message sent successfully! I\'ll get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setIsOpen(false);
            } else {
                message.error(data.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            message.error('An error occurred. Please try again later.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div 
            className={`contact-form-container ${isOpen ? 'open' : ''}`}
            onClick={(e) => {
                if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('backdrop')) {
                    setIsOpen(false);
                }
            }}
        >
            {!isOpen ? (
                <Button
                    type="primary"
                    icon={<MailOutlined />}
                    size="large"
                    onClick={() => setIsOpen(true)}
                    className="contact-form-trigger"
                >
                    Get In Touch
                </Button>
            ) : (
                <div className="contact-form-wrapper" onClick={(e) => e.stopPropagation()}>
                    <div className="contact-form-header">
                        <h2>Get In Touch</h2>
                        <Button
                            type="text"
                            icon={<CloseOutlined />}
                            onClick={() => setIsOpen(false)}
                            className="close-button"
                        />
                    </div>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <Input
                                placeholder="Your Name *"
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                required
                                size="large"
                            />
                        </div>
                        <div className="form-group">
                            <Input
                                type="email"
                                placeholder="Your Email *"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                required
                                size="large"
                            />
                        </div>
                        <div className="form-group">
                            <Input
                                placeholder="Subject (Optional)"
                                value={formData.subject}
                                onChange={(e) => handleChange('subject', e.target.value)}
                                size="large"
                            />
                        </div>
                        <div className="form-group">
                            <TextArea
                                placeholder="Your Message *"
                                value={formData.message}
                                onChange={(e) => handleChange('message', e.target.value)}
                                rows={6}
                                required
                            />
                        </div>
                        <div className="form-actions">
                            <Button
                                type="default"
                                onClick={() => setIsOpen(false)}
                                disabled={loading}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                size="large"
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};
