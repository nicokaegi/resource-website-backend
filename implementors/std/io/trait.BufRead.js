(function() {var implementors = {};
implementors["buf_redux"] = [{text:"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>, P:&nbsp;<a class=\"trait\" href=\"buf_redux/policy/trait.ReaderPolicy.html\" title=\"trait buf_redux::policy::ReaderPolicy\">ReaderPolicy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> for <a class=\"struct\" href=\"buf_redux/struct.BufReader.html\" title=\"struct buf_redux::BufReader\">BufReader</a>&lt;R, P&gt;",synthetic:false,types:["buf_redux::BufReader"]},];
implementors["gzip_header"] = [{text:"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> for <a class=\"struct\" href=\"gzip_header/struct.CrcReader.html\" title=\"struct gzip_header::CrcReader\">CrcReader</a>&lt;R&gt;",synthetic:false,types:["gzip_header::crc_reader::CrcReader"]},];
implementors["multipart"] = [{text:"impl&lt;M:&nbsp;<a class=\"trait\" href=\"multipart/server/trait.ReadEntry.html\" title=\"trait multipart::server::ReadEntry\">ReadEntry</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> for <a class=\"struct\" href=\"multipart/server/struct.MultipartData.html\" title=\"struct multipart::server::MultipartData\">MultipartData</a>&lt;M&gt;",synthetic:false,types:["multipart::server::field::MultipartData"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a> for <a class=\"enum\" href=\"multipart/server/save/enum.DataReader.html\" title=\"enum multipart::server::save::DataReader\">DataReader</a>&lt;'a&gt;",synthetic:false,types:["multipart::server::save::DataReader"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
