<a href="/dashboard"> </a>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Stock Dashboard</title>
        <style>
            body {
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 1200px;
                margin: 20px auto;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                text-align: center;
                font-weight: bold;
            }
            .section {
                margin-bottom: 30px;
            }
            .section h2 {
                padding-bottom: 10px;
                margin-bottom: 20px;
                font-weight: bold;
            }
            .stocks-table {
                width: 100%;
                border-collapse: collapse;
            }
            .stocks-table th,
            .stocks-table td {
                padding: 10px;
                text-align: left;
                font-weight: bold;
            }
            .stocks-table th {
            }
            .news-list {
                list-style: none;
                padding: 0;
            }
            .news-list li {
                padding: 10px 0;
                font-weight: bold;
            }
            .news-list a {
                text-decoration: none;
            }
            .news-list a:hover {
                text-decoration: underline;
            }
            .user-stocks {
                list-style: none;
                padding: 0;
            }
            .user-stocks li {
                padding: 10px;
                margin-bottom: 10px;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Stock Dashboard</h1>

            <div class="section">
                <h2>Popular Stocks</h2>
                <table class="stocks-table bg-base-300">
                    <thead>
                        <tr>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Price Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Apple (AAPL)</td>
                            <td>$145.09</td>
                            <td>+1.50%</td>
                        </tr>
                        <tr>
                            <td>Microsoft (MSFT)</td>
                            <td>$299.35</td>
                            <td>-0.85%</td>
                        </tr>
                        <tr>
                            <td>Amazon (AMZN)</td>
                            <td>$3,340.88</td>
                            <td>+0.72%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="section bg-base-300 p-2">
                <h2>News Coverage</h2>
                <ul class="news-list">
                    <li>
                        <a
                            href="https://finance.yahoo.com/news/apple-turns-positive-2024-addressing-204205363.html"
                            >Apple releases new iPhone model, stocks surge</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information"
                            >Microsoft announces major update to Windows 11</a
                        >
                    </li>
                    <li>
                        <a
                            href="https://www.aboutamazon.co.uk/news/operations/amazon-sea-transportation-uk-businesses"
                            >Amazon to expand logistics network in Europe</a
                        >
                    </li>
                </ul>
            </div>

            <div class="section bg-base-300 p-2">
                <h2>Your Selected Stocks</h2>
                <ul class="user-stocks">
                    <li>
                        <strong>Google (GOOGL)</strong><br />
                        Price: $2,817.52<br />
                        Price Change: +1.25%
                    </li>
                    <li>
                        <strong>Tesla (TSLA)</strong><br />
                        Price: $739.38<br />
                        Price Change: -2.35%
                    </li>
                </ul>
            </div>
        </div>
    </body>
</html>
