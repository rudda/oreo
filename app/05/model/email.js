//source https://github.com/zapier/email-reply-parser/blob/master/test/emails/
const email_content = [
    `Hi folks

    What is the best way to clear a Riak bucket of all key, values after 
    running a test?
    I am currently using the Java HTTP API.
    
    -Abhishek Kona
   `,
   `You can list the keys for the bucket and call delete for each. Or if you
   put the keys (and kept track of them in your test) you can delete them
   one at a time (without incurring the cost of calling list first.)
   
   Something like:
   
           String bucket = "my_bucket";
           BucketResponse bucketResponse = riakClient.listBucket(bucket);
           RiakBucketInfo bucketInfo = bucketResponse.getBucketInfo();
           
           for(String key : bucketInfo.getKeys()) {
               riakClient.delete(bucket, key);
           }
   
   
   would do it.
   
   See also 
   
   http://wiki.basho.com/REST-API.html#Bucket-operations
   
   which says 
   
   "At the moment there is no straightforward way to delete an entire
   Bucket. There is, however, an open ticket for the feature. To delete all
   the keys in a bucket, you’ll need to delete them all individually."
   `,

   `Oh thanks.

   Having the function would be great.
   `,

   `Awesome! I haven't had another problem with it.`,

   `One: Here's what I've got.

   - This would be the first bullet point that wraps to the second line
   to the next
   - This is the second bullet point and it doesn't wrap
   - This is the third bullet point and I'm having trouble coming up with enough
   to say
   - This is the fourth bullet point
   
   Two:
   - Here is another bullet point
   - And another one
   
   This is a paragraph that talks about a bunch of stuff. It goes on and on
   for a while.`,

   `I get proper rendering as well.

   Sent from a magnificent torch of pixels`,

   `:+1:`,

] 

module.exports = email_content;