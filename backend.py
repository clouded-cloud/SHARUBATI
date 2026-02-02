from flask import Flask, request, jsonify, send_from_directory
from intasend import APIService
import os

app = Flask(__name__)

# IntaSend configuration
publishable_key = os.getenv('INTASEND_PUBLISHABLE_KEY', 'ISPubKey_test_1bef1ff2-9cb0-4563-89c7-d03c24b19d81')
secret_key = os.getenv('INTASEND_SECRET_KEY', 'ISSecretKey_test_1234567890abcdef1234567890abcdef12345678')
service = APIService(token=secret_key, publishable_key=publishable_key, test=True)

@app.route('/initiate-payment', methods=['POST'])
def initiate_payment():
    try:
        data = request.get_json()

        # Extract payment data
        phone_number = data.get('phone_number')
        email = data.get('email', '')
        amount = data.get('amount')
        currency = data.get('currency', 'KES')
        comment = data.get('comment', 'SHARUBATI Order')
        redirect_url = data.get('redirect_url', 'http://localhost:5000/thank-you')
        api_ref = data.get('api_ref', 'SHARUBATI')

        # Validate required fields
        if not phone_number or not amount:
            return jsonify({'error': 'Phone number and amount are required'}), 400

        # Initiate payment
        response = service.collect.checkout(
            phone_number=phone_number,
            email=email,
            amount=amount,
            currency=currency,
            comment=comment,
            redirect_url=redirect_url,
            api_ref=api_ref
        )

        return jsonify({
            'success': True,
            'url': response.get('url'),
            'tracking_id': response.get('tracking_id')
        })

    except Exception as e:
        print(f"Payment initiation error: {str(e)}")
        return jsonify({'error': 'Failed to initiate payment'}), 500

@app.route('/thank-you')
def thank_you():
    return '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - SHARUBATI</title>
        <style>
            body {
                font-family: 'Georgia', serif;
                margin: 0;
                padding: 0;
                background: #f8f6f2;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                text-align: center;
            }
            .container {
                max-width: 600px;
                padding: 40px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            h1 {
                color: #000;
                font-size: 36px;
                margin-bottom: 20px;
            }
            p {
                color: #424242;
                font-size: 18px;
                line-height: 1.6;
                margin-bottom: 30px;
            }
            .emoji {
                font-size: 60px;
                margin-bottom: 20px;
            }
            .btn {
                display: inline-block;
                background: #000;
                color: white;
                padding: 12px 30px;
                text-decoration: none;
                border-radius: 4px;
                font-size: 16px;
                margin-top: 20px;
            }
            .btn:hover {
                background: #424242;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="emoji">🧃</div>
            <h1>Thank You for Your Order!</h1>
            <p>Your payment has been received successfully. We're preparing your order and will notify you once it's ready.</p>
            <p>Order confirmation has been sent to your email/phone.</p>
            <a href="/" class="btn">Return to Home</a>
        </div>
    </body>
    </html>
    '''

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
