# coin-trader
<
‍Dune SQL has been incredibly well received by our community of wizards, and we’re excited to work with everyone to make it even better. However, rolling out Spark SQL and now Dune SQL has admittedly caused some confusion and frustration. We’ve not done a great job at communicating the long term direction, and that’s on me. Expect more and clearer communication from us going forward.

‍By now, you are probably aware that our Postgres based v1 platform is almost fully sunset, with only the Ethereum dataset still available. This dataset will sunset by July 2023. I’ve included way more context for why Postgres is being sunset further down in the post, if you are interested in the details.

‍Today, you have two choices when it comes to querying the growing list of datasets on our v2 data platform: Spark SQL and Dune SQL. Going forward, all of Dune’s efforts will be put into Dune SQL, and we are also aiming to sunset Spark SQL by July. This is because Dune SQL is the fastest and most ergonomic engine that we believe will completely change how you work with blockchain data.

‍

Moving to Dune SQL

While there are syntax changes needed to make Postgres and Spark SQL queries run on Dune SQL, you will find that Dune SQL is faster, and has better ergonomics. In Dune SQL, you no longer need to copy common logic around as CTEs, as you can refer to common logic in other queries using our Queries as Views functionality. 

That said, migrating queries from one engine to another while learning a slightly new syntax can be painful, and we know this. This is why we have built a tool to automatically help make query  changes for you. This is now available in the query editor with some limited functionality, and we’ll iterate on making it better. The tool will be open sourced, so that wizards can help contribute fixes that in turn help ot


const image : import image "https://global-uploads.webflow.com/62fca6954348cf321d918ef1/6409d3d2c602fe0969e8488a_FqxREzjWYAA-LCA.